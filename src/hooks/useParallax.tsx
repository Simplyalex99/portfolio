import { useEffect } from 'react';

export const useParallax = () => {
  useEffect(() => {
    const listener = () => {
      interface Props extends HTMLElement {}
      const target = document.querySelectorAll('.scroll');
      let index = 0;
      const size = target.length;
      for (index; index < size; index++) {
        const el = target[index] as Props;
        let pos = 0;
        if (el?.dataset?.rate) {
          pos = Number(el?.dataset?.rate);
        }
        const position = window.pageYOffset * pos;
        if (el.dataset.direction === 'vertical') {
          el.style.transform = `translate3d(0px,${position}px,0px)`;
        } else {
          let x = 0;
          if (el?.dataset?.ratex) {
            x = Number(el.dataset.ratex);
          }
          const posX = window.pageYOffset * x;

          let y = 0;
          if (el?.dataset?.ratey) {
            y = Number(el.dataset.ratey);
          }
          const posY = window.pageYOffset * y;
          el.style.transform = `translate3d(${posX}px,${posY}px,0px)`;
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
