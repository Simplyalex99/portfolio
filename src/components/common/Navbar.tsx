import React, { useState } from 'react';
import Link, { LinkProps } from 'next/link';
import navbarStyles from '@/styles/components/Navbar.module.scss';
import { HamburgerMenuSVG } from '../svg/common/HamburgerMenu';
import { CloseSVG } from '../svg/common/Close';

import { useToggleNavbarMenu } from '../../hooks/index';

import Links from '../../enums/links';

export type NavItemProps = {
  href: string;
  children: React.ReactNode;
};
export const NavItem = (props: NavItemProps & LinkProps) => {
  const { children } = props;
  return <Link {...props}>{children}</Link>;
};

export enum ActiveTabType {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
}

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState(ActiveTabType.HOME);
  const getIsActive = (type: ActiveTabType) => {
    return activeTab === type ? navbarStyles['active-tab'] : '';
  };
  const { HOME_PATH, ABOUT_PATH, CONTACT_PATH } = Links;

  const toggleProps = {
    menuId: 'menu-wrapper',
    closeId: 'close',
    navbarId: 'nav',
    className: navbarStyles['open-nav'],
  };

  useToggleNavbarMenu(toggleProps);
  return (
    <div
      id="navbar"
      className={`${navbarStyles['drop-shadow']} ${navbarStyles['navbar-bg']}`}
    >
      <header className={`flex  wrapper ${navbarStyles.container}`}>
        <div className={`flex ${navbarStyles['custom-link-wrapper']}`}>
          <div
            id="menu-wrapper"
            role="presentation"
            className={` 
                ${navbarStyles['menu-wrapper-white']}
            }`}
          >
            <HamburgerMenuSVG
              className={`${navbarStyles['menu-icon']} black `}
              width="35"
              height="35"
            />
          </div>

          <Link href={HOME_PATH}>
            <button type="button" className={`${navbarStyles['custom-link']}`}>
              MyPortfolio
            </button>
          </Link>
        </div>
        <nav
          id="nav"
          className={`${navbarStyles['nav-container']} 
                 
              `}
        >
          <div
            role="presentation"
            id="close"
            className={navbarStyles['close-icon-wrapper']}
          >
            <CloseSVG
              className={`${navbarStyles['close-icon']} ${navbarStyles['close-icon-light']}`}
            />
          </div>
          <div className={`${navbarStyles['links-wrapper']}`}>
            <Link href={HOME_PATH}>
              <div
                role="presentation"
                onClick={() => setActiveTab(ActiveTabType.HOME)}
                className={`${navbarStyles['nav-item-wrapper']}`}
              >
                <button
                  type="button"
                  className={`${getIsActive(ActiveTabType.HOME)} ${
                    navbarStyles['nav-item']
                  }  `}
                >
                  <span>{ActiveTabType.HOME}</span>
                </button>
              </div>
            </Link>
            <Link href={ABOUT_PATH}>
              <div
                role="presentation"
                onClick={() => setActiveTab(ActiveTabType.ABOUT)}
                className={`${navbarStyles['nav-item-wrapper']} `}
              >
                <button
                  type="button"
                  className={`${getIsActive(ActiveTabType.ABOUT)} ${
                    navbarStyles['nav-item']
                  }   `}
                >
                  <span> {ActiveTabType.ABOUT}</span>{' '}
                </button>
              </div>
            </Link>
            <Link href={CONTACT_PATH}>
              <div
                role="presentation"
                className={`${navbarStyles['nav-item-wrapper']}`}
              >
                <button type="button" className={navbarStyles.contact}>
                  {ActiveTabType.CONTACT}
                </button>
              </div>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
