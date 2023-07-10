import React from 'react';

export const LineArtSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="198px"
      height="1458px"
      viewBox="0 0 198 1458"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient
          x1="50%"
          y1="7.06935325%"
          x2="50%"
          y2="100%"
          id="linearGradient-1"
        >
          <stop stop-color="#DE1652" offset="0%" />
          <stop stop-color="#F37121" offset="50.2239948%" />
          <stop stop-color="#FBAB26" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="Homepage"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        stroke-dasharray="12,16"
        stroke-linejoin="round"
      >
        <g
          id="Desktop-Homepage-1"
          transform="translate(-646.000000, -825.000000)"
          stroke="#F78DA7"
          stroke-width="4"
        >
          <g id="content" transform="translate(0.000000, 560.000000)">
            <path
              d="M702,266 C682,424 795.064639,474.307498 716,600 C599,786 769,821 688,988 C548.560405,1275.48657 822.815807,1223 840.843207,1373 C858.870608,1523 605.485477,1528 687.610302,1728"
              id="scroll-line"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
export default LineArtSVG;
