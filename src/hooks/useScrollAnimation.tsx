import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const listener = () => {
      const paths = document.querySelectorAll('path');
      if (paths.length < 2) {
        return;
      }
      const path = paths[2];
      const pathLength = path?.getTotalLength() ?? 0;
      if (path !== null) {
        path.style.strokeDasharray = pathLength + ' ' + pathLength;
        path.style.strokeDashoffset = `${pathLength}`;
      }
      const scrollTopDoc = document.documentElement.scrollTop;
      const scrollTopBody = document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;

      const clientHeight = document.documentElement.clientHeight;
      const totalScroll = scrollTopBody + scrollTopDoc;
      const totalHeight = scrollHeight + clientHeight;
      const scrollPercentage = totalScroll / totalHeight;
      const drawLength = pathLength * scrollPercentage;
      if (path !== null) {
        path.style.strokeDashoffset = `${pathLength - drawLength}`;
      }
    };

    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });
};

export default useScrollAnimation;
