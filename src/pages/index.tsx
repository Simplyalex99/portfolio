import Link from 'next/link';
import Image from 'next/image';
import {
  withLayout,
  RightArrowSVG,
  Navigation,
  WorkSection,
  SEO,
  SkillSection,
  MottoSection,
  StorySection,
} from '@/components';
import yaml from '@/templates/about.yaml';
import { useParallax } from '@/src/hooks';
import homeStyles from '@/styles/pages/Home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { LinkIds } from '../enums/links';
import 'swiper/css';
import 'swiper/css/autoplay';

export const About = () => {
  const data = yaml.mainSection;
  const images = data.images;
  const imageId = 'carousel';
  const onMouseOverHandler = () => {
    const element = document.getElementById('arrow-btn');
    if (element) {
      element.style.width = '120px';
      element.style.transition = '0.5s ease';
    }
  };
  const onMouseLeaveHandler = () => {
    const element = document.getElementById('arrow-btn');
    if (element) {
      element.style.width = '100px';
    }
  };
  useParallax();
  return (
    <>
      <div className="wrapper">
        <SEO title="about Alex" />
        <section className={homeStyles.hero}>
          <div className={homeStyles['hero-content']}>
            <div className={homeStyles['heading-wrapper']}>
              <p className={homeStyles['hero-subheading']}>{data.subheading}</p>
              <h2 className={homeStyles['hero-heading']}>
                <span>{data.headingAccent}</span>
                <br />
                {data.heading}
              </h2>
            </div>
            <p className={homeStyles['hero-description']}>{data.description}</p>
            <div
              className={homeStyles['action-btn-wrapper']}
              onFocus={() => undefined}
              onMouseOver={onMouseOverHandler}
              onMouseLeave={onMouseLeaveHandler}
            >
              <RightArrowSVG width={100} id="arrow-btn" />
              <Link
                href={`#${LinkIds.WORK_ID}`}
                className={homeStyles['action-btn']}
              >
                See my work
              </Link>
            </div>
          </div>

          <div className={homeStyles['carousel-wrapper']}>
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
            >
              {images.map((src) => {
                return (
                  <SwiperSlide key={src} style={{ position: 'relative' }}>
                    <Image
                      alt="my hobby"
                      id={imageId}
                      src={src}
                      width={50}
                      height={50}
                      className={homeStyles['img-slide']}
                      unoptimized
                      priority
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className={homeStyles.navigation}>
            <Navigation />
          </div>
        </section>
        <WorkSection />
      </div>

      <SkillSection />
      <MottoSection />
      <StorySection />
    </>
  );
};

export default About;
About.getLayout = withLayout();
