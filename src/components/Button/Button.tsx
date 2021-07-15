import { ReactNode, ReactElement } from 'react';

type ButtonProps = {
  children: ReactNode;
};

/**
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum cupiditate neque sint accusamus amet nam. Sed eum dicta maxime.
**/


export const Button = ({ children }: ButtonProps): ReactElement => <button type="button">{children}</button>;
