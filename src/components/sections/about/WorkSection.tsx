import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import homeStyles from '@/styles/pages/About.module.scss';
import { getPaginationHelper } from '@/utils';
import yaml from '@/templates/about.yaml';
import WatermarkSection from '../../others/WatermarkSection';
import { Button } from '../../common/Button';
import { Pagination } from '../../utils/PaginationComponent';

type WorkData = {
  maxPages: number;
  filterData: typeof yaml.workSection.content;
};
export const WorkSection = () => {
  const { content } = yaml.workSection;
  const dataPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const { maxPages, filterData }: WorkData = getPaginationHelper(
    dataPerPage,
    currentPage,
    content
  );
  const pageHandler = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <section className={homeStyles['work-section']}>
      <WatermarkSection heading="My contributions" watermark="Work" />
      <div className={homeStyles['work-content-wrapper']}>
        {filterData.map((data) => {
          const { imageUrl, linkUrl, description, text, title, accent } = data;
          return (
            <div key={title} className={homeStyles['work-content']}>
              <div className={homeStyles['work-img-wrapper']}>
                <h2 className={homeStyles['work-heading']}>
                  {accent}
                  <span className={homeStyles['work-accent']}>{text}</span>
                </h2>
                <Image
                  alt="open source"
                  src={imageUrl}
                  width={50}
                  height={50}
                  className={homeStyles['work-img']}
                  unoptimized
                />
              </div>
              <div className={homeStyles['work-text-content']}>
                <p className={homeStyles['work-title']}>{title}</p>
                <p className={homeStyles['work-description']}>{description}</p>
              </div>
              <Link href={linkUrl} className={homeStyles['work-link']}>
                <Button type="button" width="md">
                  See it
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className={homeStyles['work-pagination']}>
        <Pagination
          totalPages={maxPages}
          currentPage={currentPage}
          onChange={pageHandler}
        />
      </div>
    </section>
  );
};
export default WorkSection;