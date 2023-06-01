import Link from 'next/link';
import pageNotFoundStyles from '@/styles/pages/404.module.scss';
import {
  PageNotFoundSVG,
  DownLeftArrowSVG,
  PrimaryLayout,
  NextPageWithLayout,
} from '@/components';

const NotFoundPage: NextPageWithLayout = () => {
  return (
    <div className={pageNotFoundStyles.wrapper}>
      <section className={pageNotFoundStyles['error-illustration-wrapper']}>
        <PageNotFoundSVG />
      </section>
      <section className={pageNotFoundStyles.content}>
        <h1 className={`${pageNotFoundStyles.title}`}>
          <span>Oops! </span>We couldn&apos;t find that page.
        </h1>
        <p className={pageNotFoundStyles['sub-heading']}>
          Maybe you can find what you need here?
        </p>{' '}
        <DownLeftArrowSVG
          className={`${pageNotFoundStyles['down-arrow']} ${pageNotFoundStyles['black-arrow']}`}
        />
        <Link href="/">
          <p className={pageNotFoundStyles['redirect-link']}>Go to home</p>
        </Link>
      </section>
    </div>
  );
};
export default NotFoundPage;
NotFoundPage.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
