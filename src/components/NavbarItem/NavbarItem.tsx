import React from 'react';
import styles from './NavbarItem.module.scss';
import cn from 'classnames';
type NavbarItemProps = {
  text: string;
  icon: React.ReactNode;
  active?: boolean;
  link?: string;
  onClick?: () => void;
};

export const NavbarItem = ({
  text,
  icon,
  active = false,
  link,
  onClick,
}: NavbarItemProps) => {

  return (
    <a
      href={link}
      className={cn(styles.navbarItem,{[styles.active]: active})}
      role="menuitem"
      onClick={onClick}
    >
      {React.cloneElement(icon as React.ReactElement, {
        className: styles.navbarItemIcon,
      })}
      <p
        className={styles.navbarItemText}
      >
        {text}
      </p>
    </a>
  );
};
