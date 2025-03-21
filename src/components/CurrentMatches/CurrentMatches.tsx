import styles from './CurrentMatches.module.scss';
import SoccerBall from '../../assets/icons/soccer-ball.svg';
import BarcelonaIcon from '../../assets/icons/barselonaSpain.svg';
import ManchesterIcon from '../../assets/icons/ManchesterLondon.svg';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {CurrentMatchType } from '../../types/countryMatchesTypes';

export const CurrentMatches: React.FC = () => {
  const matches: CurrentMatchType[] = [
    {
      teams: [
        { name: 'Barcelona', icon: BarcelonaIcon },
        { name: 'Manchester', icon: ManchesterIcon },
      ],
      time: '20:45',
      day: 'Today',
    },
    {
      teams: [
        { name: 'Barcelona', icon: BarcelonaIcon },
        { name: 'Manchester', icon: ManchesterIcon },
      ],
      time: '22:30',
      day: 'Today',
    },
    {
      teams: [
        { name: 'Barcelona', icon: BarcelonaIcon },
        { name: 'Manchester', icon: ManchesterIcon },
      ],
      time: '19:45',
      day: 'Tomorrow',
    },
    {
      teams: [
        { name: 'Barcelona', icon: BarcelonaIcon },
        { name: 'Manchester', icon: ManchesterIcon },
      ],
      time: '21:15',
      day: 'Tomorrow',
    },
  ];
  // const [matches, setMatches] = useState<>(null)
  const navigate = useNavigate();
  // useEffect(() => {}, []); // fetch matches from api

  return (
    <div className={styles.container}>
      {matches.map((match, index) => (
        <div
          onClick={() =>
            navigate('/current_match', {
              state: { match },
            })
          }
          key={index}
          className={styles.card}
        >
          <div className={styles.teams}>
            {match.teams[0].icon ? (
              <img
                src={match.teams[0].icon}
                alt={match.teams[0].name}
                className={styles.icon}
              />
            ) : (
              <span>{match.teams[0].name}</span>
            )}

            <img
              src={SoccerBall}
              alt="soccer ball"
              className={styles.icon__soccer}
            />
            {match.teams[1].icon ? (
              <img
                src={match.teams[1].icon}
                alt={match.teams[1].name}
                className={styles.icon}
              />
            ) : (
              <span>{match.teams[1].name}</span>
            )}
          </div>

          <div className={styles.info}>
            <span>{match.day}</span>
            <span>{match.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
