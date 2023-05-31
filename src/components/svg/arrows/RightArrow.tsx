import React from 'react';

export const RightArrowSVG: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      width="113"
      height="8"
      viewBox="0 0 113 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M112.358 4.35355C112.553 4.15829 112.553 3.84171 112.358 3.64645L109.176 0.464466C108.981 0.269204 108.664 0.269204 108.469 0.464466C108.274 0.659728 108.274 0.976311 108.469 1.17157L111.297 4L108.469 6.82843C108.274 7.02369 108.274 7.34027 108.469 7.53553C108.664 7.7308 108.981 7.7308 109.176 7.53553L112.358 4.35355ZM0 4.5H112.004V3.5H0L0 4.5Z"
        fill="#B3B0B0"
      />
    </svg>
  );
};
export default RightArrowSVG;
