import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {}

/**
 * Shared button component
 */
export const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};
