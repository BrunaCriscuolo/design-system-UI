import { ReactNode, ReactElement } from 'react';

type ButtonProps = {
  children: ReactNode;
};

export const Button = ({ children }: ButtonProps): ReactElement => <button type="button">{children}</button>;
