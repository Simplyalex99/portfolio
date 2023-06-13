import { useState } from 'react';
import Image from 'next/image';
import homeStyles from '@/styles/pages/Home.module.scss';
import yaml from '@/templates/home.yaml';
import { getPaginationHelper } from '@/utils';
import { createPaginationTheme } from '../../utils/PaginationComponent';
import { CssSVG } from '../../svg/icons/Css';
import { HtmlSVG } from '../../svg/icons/Html';
import { ReactSVG } from '../../svg/icons/React';
import { DockerSVG } from '../../svg/icons/Docker';
import { TypeScriptSVG } from '../../svg/icons/TypeScript';
import { JavaScriptSVG } from '../../svg/icons/JavaScript';
import { PythonSVG } from '../../svg/icons/Python';
import { AccentSVG } from '../../svg/others/Accent';
import { GithubSVG } from '../../svg/social/Github';

const PaginationDarkTheme = createPaginationTheme('DARK');

export const SkillSection = () => {
  const { skillSection } = yaml;
  const skillContent = skillSection.content;
  const dataPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const skillData = getPaginationHelper(dataPerPage, currentPage, skillContent);
  const {
    maxPages,
    filterData,
  }: { maxPages: number; filterData: typeof skillContent } = skillData;
  const pageHandler = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <section className={`${homeStyles['skill-section']}`}>
      <div className={`wrapper ${homeStyles['content-wrapper']}`}>
        <div className={homeStyles['title-wrapper']}>
          <h2>Skills</h2>
          <span className={homeStyles['accent-svg']}>
            <AccentSVG width="200" height="30" />
          </span>
        </div>
        <p className={homeStyles['skill-description']}>
          {skillSection.description}
        </p>
        <div className={homeStyles.pagination}>
          {filterData.map((content) => {
            const url = content.imageUrl;
            return (
              <>
                <Image
                  src={url}
                  alt="code"
                  objectFit="cover"
                  width={50}
                  height={50}
                />
                <h3 className={homeStyles['pagination-title']}>
                  {content.title}
                </h3>
                <p className={homeStyles['pagination-text']}>
                  {content.description}
                </p>
              </>
            );
          })}
          <PaginationDarkTheme
            hideFirstAndLastPageLinks
            totalPages={maxPages}
            currentPage={currentPage}
            onChange={pageHandler}
          />
        </div>

        <div className={homeStyles.content} />
        <div className={homeStyles['icons-wrapper']}>
          <ReactSVG />
          <GithubSVG />
          <HtmlSVG />
          <DockerSVG />
          <CssSVG />
          <PythonSVG />
          <JavaScriptSVG />
          <TypeScriptSVG />
        </div>
      </div>
    </section>
  );
};
export default SkillSection;
