import { useEffect } from 'react';

export const useScrollAnimation = (svgId: string, pathId: string) => {
  useEffect(() => {
    const listener = () => {
      const svg = document.getElementById(svgId);
      if (svg?.style) {
        if (svg.style.display !== 'inline-block') {
          svg.style.display = 'inline-block';
        }
      }
      const element = document.getElementById(pathId);
      const path = element as unknown as SVGPathElement;
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
      console.log(`length ${drawLength} ${scrollPercentage}`);
    };
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });
};

export default useScrollAnimation;
