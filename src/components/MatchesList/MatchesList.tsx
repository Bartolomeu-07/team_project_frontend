import { Match } from '../../types/countryMatchesTypes';
import { MatchItem } from '../MatchItem';
// import style from './MatchesList.module.scss';

type Props = {
  matches: Match[];
};

export const MatchesList: React.FC<Props> = ({ matches }) => {
  return (
    <div
    //  className={style.matches__list}
     >
      {matches.map((match) => (
        <MatchItem key={match.teamA.teamLogo} match={match} />
      ))}
    </div>
  );
};
