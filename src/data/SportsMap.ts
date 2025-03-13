import FootballIcon from '../assets/icons/sports/football.svg?react';
import BasketballIcon from '../assets/icons/sports/basketball.svg?react';
import GolfIcon from '../assets/icons/sports/golf.svg?react';
import HockeyIcon from '../assets/icons/sports/hockey.svg?react';
import TennisIcon from '../assets/icons/sports/tennis.svg?react';
import RugbyIcon from '../assets/icons/sports/rugby.svg?react';
import { Sport } from '../types/SportType';

export const sportsMap: Sport[] = [
  {
    value: 'football',
    label: 'Football',
    icon: FootballIcon,
  },
  {
    value: 'basketball',
    label: 'Basketball',
    icon: BasketballIcon,
  },
  {
    value: 'golf',
    label: 'Golf',
    icon: GolfIcon,
  },
  {
    value: 'hockey',
    label: 'Hockey',
    icon: HockeyIcon,
  },
  {
    value: 'tennis',
    label: 'Tennis',
    icon: TennisIcon,
  },
  {
    value: 'rugby',
    label: 'Rugby',
    icon: RugbyIcon,
  },
];
