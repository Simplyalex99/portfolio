import React from 'react';
import buttonStyles from '@/styles/components/Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type: 'button' | 'submit' | 'reset' | undefined;
};

export const Button = ({
  children,
  className,
  type = 'button',
  ...props
}: ButtonProps & React.HTMLProps<HTMLButtonElement>) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={` ${buttonStyles.btn} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
