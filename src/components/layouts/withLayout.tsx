import React from 'react';
import { PrimaryLayout } from './PrimaryLayout';

export const withLayout = () => {
  return function getLayout(page: React.ReactElement) {
    return <PrimaryLayout>{page}</PrimaryLayout>;
  };
};
export default withLayout;
