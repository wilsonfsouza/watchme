import { Icon } from './Icon';

import '../styles/button-open-sidebar.scss';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: 'filter';
}

export function ButtonOpenSideBar({ iconName, ...rest }: ButtonProps) {
  return (
    <button className="sidebar-button-open" type="button" {...rest}>
      <Icon name={iconName} color={'#FBFBFB'} />
    </button>
  );
}