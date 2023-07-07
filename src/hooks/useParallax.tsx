import { useEffect } from 'react';

export const useParallax = () => {
  useEffect(() => {
    const listener = () => {
      const target = document.querySelectorAll('.scroll');
      let index = 0;
      const size = target.length;
      for (index; index < size; index++) {
        const element = target[index] as HTMLElement;
        let rate = 0;
        if (element?.dataset?.rate) {
          rate = Number(element?.dataset?.rate);
        }
        const position = window.pageYOffset * rate;
        if (element.dataset.direction === 'vertical') {
          element.style.transform = `translate3d(0px,${position}px,0px)`;
        } else if (element.dataset.direction === 'horizontal') {
          element.style.transform = `translate3d(${position}px,0px,0px)`;
        } else {
          let ratex = 0;
          if (element?.dataset?.ratex) {
            ratex = Number(element.dataset.ratex);
          }
          const posX = window.pageYOffset * ratex;

          let ratey = 0;
          if (element?.dataset?.ratey) {
            ratey = Number(element.dataset.ratey);
          }
          const posY = window.pageYOffset * ratey;
          element.style.transform = `translate3d(${posX}px,${posY}px,0px)`;
        }
      }
    };
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);
};
export default useParallax;
