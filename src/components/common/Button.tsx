import React from 'react';
import buttonStyles from '@/styles/components/Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  width?: 'sm' | 'md' | 'lg';
};

export const Button = ({
  children,
  className,
  type = 'button',
  width = 'lg',
  ...props
}: ButtonProps & React.HTMLProps<HTMLButtonElement>) => {
  const widths = {
    sm: '100px',
    md: '150px',
    lg: '200px',
  };
  const size = widths[width];
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      style={{ width: size }}
      className={` ${buttonStyles.btn} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
