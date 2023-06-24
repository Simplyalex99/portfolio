import { useState } from 'react';
import Image from 'next/image';
import homeStyles from '@/styles/components/Skill.module.scss';
import yaml from '@/templates/about.yaml';
import { getPaginationHelper } from '@/utils';
import { LinkIds } from '@/src/enums/links';
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
    <>
      {' '}
      <section
        className={`${homeStyles['skill-section']}`}
        id={LinkIds.SKILLS_ID}
      >
        <div className={` ${homeStyles['content-wrapper']} wrapper mg-top-0`}>
          <div className={homeStyles['flex-container']}>
            <div className={homeStyles['title-wrapper']}>
              <h2>Skills</h2>
              <span className={homeStyles['accent-svg']}>
                <AccentSVG width="200" height="30" />
              </span>
              <p className={homeStyles['skill-description']}>
                {skillSection.description}
              </p>
            </div>
            <div className={homeStyles['pagination-wrapper']}>
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
                      unoptimized
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
              <div className={homeStyles.pagination}>
                <PaginationDarkTheme
                  hideFirstAndLastPageLinks
                  totalPages={maxPages}
                  currentPage={currentPage}
                  onChange={pageHandler}
                />
              </div>
            </div>
            <div className={homeStyles['skill-watermark-wrap']}>
              <p className={`${homeStyles['skill-watermark']}`}>Skills</p>
            </div>
            <div className={homeStyles.content}>
              {skillContent.map((content) => {
                const url = content.imageUrl;
                return (
                  <div
                    key={content.title}
                    className={homeStyles['content-item']}
                  >
                    <div className={homeStyles.icon}>
                      <Image
                        src={url}
                        alt="code"
                        objectFit="cover"
                        width={35}
                        height={35}
                      />
                    </div>
                    <h3 className={homeStyles.title}>{content.title}</h3>
                    <p className={homeStyles.text}>{content.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={homeStyles['icons-wrapper']}>
            <ReactSVG />
            <div className={homeStyles['github-icon']}>
              <GithubSVG />
            </div>
            <HtmlSVG />
            <DockerSVG />
            <CssSVG />
            <PythonSVG />
            <JavaScriptSVG />
            <TypeScriptSVG />
          </div>
        </div>
      </section>
    </>
  );
};
export default SkillSection;
