import { useState } from 'react';
import Image from 'next/image';
import storyStyles from '@/styles/components/Story.module.scss';
import yaml from '@/templates/home.yaml';
import { getPaginationHelper } from '@/utils';
import { LinkIds } from '@/src/enums/links';
import { Pagination } from '../../utils/PaginationComponent';

type StoryProps = {
  maxPages: number;
  filterData: typeof yaml.workSection.content;
};
export const StorySection = () => {
  const { content } = yaml.storySection;
  const dataPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const { maxPages, filterData }: StoryProps = getPaginationHelper(
    dataPerPage,
    currentPage,
    content
  );
  const pageHandler = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <section
      className={`wrapper ${storyStyles['story-section']}`}
      id={LinkIds.STORY_ID}
    >
      <div
        className={`scroll ${storyStyles['watermark-wrap']}`}
        data-rate=".2"
        data-direction="vertical"
      >
        <p className={`${storyStyles.watermark}`}>Life</p>
      </div>
      <p className={storyStyles['section-heading']}>My story</p>
      {/* Small Screen */}
      <div className={storyStyles['pagination-content']}>
        {filterData.map((data) => {
          const { description, title, imageUrl } = data;

          return (
            <>
              <h2 className={storyStyles.title}>{title}</h2>
              <Image
                alt="open source"
                src={imageUrl}
                width={50}
                height={50}
                className={storyStyles['story-img']}
                unoptimized
              />
              <p className={storyStyles.description}>{description}</p>
            </>
          );
        })}
        <div className={storyStyles.pagination}>
          <Pagination
            totalPages={maxPages}
            currentPage={currentPage}
            onChange={pageHandler}
          />
        </div>
      </div>
      {/* Medium & Large Screens */}
      <div className={storyStyles.container}>
        {content.map((data) => {
          const { imageUrl, title, description } = data;
          return (
            <div className={storyStyles['grid-container']} key={title}>
              <Image
                alt="education and learning"
                src={imageUrl}
                width={50}
                height={50}
                unoptimized
                className={storyStyles['story-img']}
              />
              <div className={storyStyles['content-wrapper']}>
                <h2 className={storyStyles.title}>{title}</h2>
                <p className={storyStyles.description}>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default StorySection;
