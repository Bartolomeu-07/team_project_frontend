import { Link } from 'react-router-dom';
import style from './TopMenu.module.scss';
import { useState } from 'react';
import cn from 'classnames';

export const TopMenu: React.FC = () => {
  const links = [
    ['#all', 'All'],
    ['#live', 'Live'],
    ['#finished', 'Finished'],
    ['#scheduled', 'Scheduled'],
    ['#coś', 'Coś'],
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className={style.nav}>
      <div className={style.nav__active}>
        <Link
          className={`${style.nav__active__link} ${style.nav__active}`}
          to={links[activeIndex][0]}
        >
          {links[activeIndex][1]}
        </Link>
      </div>

      <div className={style.nav__container}>
        {links.map((link, index) => (
          <Link
            onClick={() => setActiveIndex(index)}
            key={link[0]}
            className={cn(style.nav__container__link, {
              [style.hidden]: activeIndex === index,
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
