import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { NextPageWithLayout } from '@/components';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
};
export default App;
