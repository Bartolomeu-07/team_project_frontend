import { Link } from 'react-router-dom';
import style from './TopMenu.module.scss';
import { useState } from 'react';
import cn from 'classnames';

export const TopMenu: React.FC = () => {
  const links = [
    ['#live', 'Live'],
    ['#finished', 'Finished'],
    ['#scheduled', 'Scheduled'],
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <nav className={style.nav}>
      <div className={style.nav__all}>
        <Link
          className={cn(style.nav__all__link, {
            [style.nav__active]: activeIndex === null,
          })}
          to="#all"
          onClick={() => setActiveIndex(null)}          
        >
          All
        </Link>
      </div>

      <div className={style.nav__container}>
        {links.map((link, index) => (
          <Link
            onClick={() => setActiveIndex(index)}
            key={link[0]}
            className={cn(style.nav__container__link, {
              [style.nav__active]: activeIndex === index,
            })}
            to={link[0]}
          >
            {link[1]}
          </Link>
        ))}
      </div>
    </nav>
  );
};
