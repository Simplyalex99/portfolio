/* eslint-disable no-unused-vars */
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CameraControls } from '@react-three/drei';
import { LinkIds } from '@enums';
import * as THREE from 'three';
import homeStyles from '@/styles/pages/Home.module.scss';
import yaml from '@/templates/home.yaml';
import { getPaginationHelper } from '@/utils';
import { createPaginationTheme } from '../../utils/PaginationComponent';
import { RightArrowSVG } from '../../svg/arrows/RightArrow';

const PaginationLightTheme = createPaginationTheme('LIGHT');
type PaginationData = {
  maxPages: number;
  filterData: typeof yaml.projectSection.content;
};
export const ProjectSection = () => {
  const { projectSection } = yaml;
  const projectContent = projectSection.content;
  const dataPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);

  const projectData: PaginationData = getPaginationHelper(
    dataPerPage,
    currentPage,
    projectContent
  );

  const { maxPages, filterData } = projectData;
  const textureLoader = new THREE.TextureLoader();
  const camera = new THREE.PerspectiveCamera();
  camera.position.set(0, 0, 4);
  let map: null | THREE.Texture = null;
  const cameraControlRef = useRef<CameraControls | null>(null);
  const pageHandler = (page: number) => {
    setCurrentPage(page);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onPointerEnterHandler = () => {
    if (cameraControlRef.current) {
      cameraControlRef.current.enabled = true;
    }
    cameraControlRef.current?.rotate(0.55, 0, true);
    setTimeout(() => {
      if (cameraControlRef.current) {
        cameraControlRef.current.enabled = false;
      }
    }, 300);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onPointerLeaveHandler = () => {
    if (cameraControlRef.current) {
      cameraControlRef.current.enabled = true;
    }
    cameraControlRef.current?.reset(true);

    setTimeout(() => {
      if (cameraControlRef.current) {
        cameraControlRef.current.enabled = false;
      }
    }, 300);
  };

  const onMouseOverHandler = () => {
    const element = document.getElementById('arrow-btn');
    if (element) {
      element.style.width = '113px';
      element.style.transition = '0.5s ease';
    }
  };
  const onMouseLeaveHandler = () => {
    const element = document.getElementById('arrow-btn');
    if (element) {
      element.style.width = '90px';
    }
  };
  return (
    <section
      className={`${homeStyles['project-section']} wrapper`}
      id={LinkIds.PROJECT_ID}
    >
      {filterData.map((data) => {
        if (process.browser) {
          map = textureLoader.load(data.imageUrl);
          map.mapping = THREE.EquirectangularReflectionMapping;
          map.encoding = THREE.sRGBEncoding;
          map.minFilter = THREE.LinearFilter;
        }
        return (
          <>
            <div className={homeStyles['heading-wrapper']}>
              <h3>/Projects</h3>
              <h2>{data.title}</h2>
            </div>
            <div className={homeStyles['project-grid']}>
              <div className={homeStyles.webgl}>
                <Image
                  alt="project"
                  src={`/${data.imageUrl}`}
                  width={400}
                  height={400}
                  className={homeStyles.img}
                />
              </div>
              <div className={homeStyles['project-content']}>
                <p className={homeStyles['project-type']}>{data.type}</p>
                <p className={homeStyles['project-description']}>
                  {data.description}
                </p>
                <div
                  onFocus={() => undefined}
                  onMouseOver={onMouseOverHandler}
                  onMouseLeave={onMouseLeaveHandler}
                  className={homeStyles['project-btn-wrapper']}
                >
                  <RightArrowSVG width={90} id="arrow-btn" />
                  <Link
                    href={data.linkUrl ?? ''}
                    className={homeStyles['project-btn']}
                  >
                    View it
                  </Link>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <div>
        <PaginationLightTheme
          onChange={pageHandler}
          currentPage={currentPage}
          totalPages={maxPages}
          hideFirstAndLastPageLinks
        />
      </div>
    </section>
  );
};
export default ProjectSection;
