import React from 'react';

export const SquaresSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 378 367"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect y="183" width="189" height="184" fill="white" />
      <rect x="189" width="189" height="184" fill="white" />
    </svg>
  );
};
export default SquaresSVG;
