import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import homeStyles from '@/styles/components/Work.module.scss';
import { getPaginationHelper } from '@/utils';
import yaml from '@/templates/about.yaml';
import { LinkIds } from '@/src/enums/links';
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
      <div
        className={`scroll ${homeStyles['watermark-wrap']}`}
        data-rate=".3"
        data-direction="vertical"
      >
        <p className={`${homeStyles.watermark}`}>Work</p>
      </div>
      <p className={homeStyles['section-heading']}>My contributions</p>
      <div className={homeStyles['work-content-wrapper']} id={LinkIds.WORK_ID}>
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
              <div className={homeStyles['work-link-wrapper']}>
                <Link href={linkUrl} className={homeStyles['work-link']}>
                  <Button type="button" width="md">
                    See it
                  </Button>
                </Link>
              </div>
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
