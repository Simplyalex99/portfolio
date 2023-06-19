import React, { useRef } from 'react';
import Image from 'next/image';
import yaml from '@/templates/home.yaml';
import { LinkIds } from '@enums';
import homeStyles from '@/styles/pages/Home.module.scss';
import {
  withLayout,
  SEO,
  SquaresSVG,
  ScrollSVG,
  ContactSection,
  LineArtSVG,
  SkillSection,
  ProjectSection,
  MediumAbstractSVG,
  Button,
} from '@/components';
import { useScrollAnimation, useParallax } from '@/hooks';
import Link from 'next/link';

export const Home = () => {
  const { heroSection } = yaml;
  const svgId = 'scroll-svg';
  const lineArtPathId = 'scroll-line';
  const ref = useRef<HTMLDivElement>(null);
  useParallax();
  useScrollAnimation(svgId, lineArtPathId);
  return (
    <>
      <SEO title="My Portfolio" />
      <div className={homeStyles['line-container']}>
        <LineArtSVG preserveAspectRatio="xMidYMid meet" id={svgId} />
      </div>
      <div className={`${homeStyles['hero-img-wrapper']}`}>
        <div className={homeStyles['hero-img-accent']}>
          <SquaresSVG />
        </div>
        <Image
          src="/code.png"
          alt="code"
          layout="fill"
          objectFit="cover"
          className={homeStyles['hero-img']}
        />
      </div>
      <div className={`${homeStyles.wrapper}`}>
        <div className={homeStyles['medium-blob']}>
          <MediumAbstractSVG />
        </div>
        <p
          className={`${homeStyles['hero-watermark']} scroll`}
          data-rate="-1"
          data-direction="vertical"
        >
          Alex
        </p>
        <section className={`${homeStyles.hero} wrapper`} ref={ref}>
          <h1
            className={` ${homeStyles['hero-content']} scroll`}
            data-rate="-.4"
            data-direction="vertical"
          >
            {heroSection.heading}
          </h1>
          <p
            className={`${homeStyles['sub-heading']} ${homeStyles['hero-content']} scroll`}
            data-rate="-.4"
            data-direction="vertical"
          >
            {heroSection.subheading}
          </p>
          <Link href={`#${LinkIds.PROJECT_ID}`}>
            <Button
              type="button"
              className={`${homeStyles['action-btn']} scroll`}
            >
              See my work
            </Button>
          </Link>
          <div
            className={` text-center ${homeStyles['scroll-wrapper']} ${homeStyles.scroll} scroll`}
            data-rate=".3"
            data-direction="vertical"
          >
            <p className={`${homeStyles['hero-content']}`}>scroll</p>
            <ScrollSVG className={`  ${homeStyles.svg}`} />
          </div>
        </section>
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </>
  );
};
export default Home;
Home.getLayout = withLayout();
