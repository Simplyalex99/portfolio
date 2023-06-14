import Link from 'next/link';
import FooterStyles from '@/styles/components/Footer.module.scss';

import Links from '../../enums/links';

export const Footer = () => {
  const { HOME_PATH, ABOUT_PATH, GITHUB_LINK } = Links;
  return (
    <footer
      className={`${FooterStyles.footer} ${FooterStyles['footer-bg']}
}`}
    >
      <div className={FooterStyles['footer-wrapper']}>
        <div
          className={`${FooterStyles['footer-links']} 
          `}
        >
          <Link href={HOME_PATH}>
            <p className={FooterStyles['footer-link']}>Home</p>
          </Link>
          <Link href={ABOUT_PATH}>
            <p className={FooterStyles['footer-link']}>About</p>
          </Link>
          <Link href={GITHUB_LINK}>
            <p className={FooterStyles['footer-link']}>GitHub</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
