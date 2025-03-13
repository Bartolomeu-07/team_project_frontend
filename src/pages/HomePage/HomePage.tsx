import { CountryMatches } from '../../components/CountryMatches';
import { CurrentMatches } from '../../components/CurrentMatches/CurrentMatches';
import { MatchesFilter } from '../../components/MatchesFilter';
import { countryMatches } from '../../data/CountryMatches';
import style from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={style.home}>
      <div className={style.home__list}>
        <MatchesFilter />
        <CurrentMatches />

        {countryMatches.map((countryMatch) => {
          const { countryFlag, countryName, leagues } = countryMatch;
          return (
            <div key={countryFlag}>
              <CountryMatches
                key={countryFlag}
                countryFlag={countryFlag}
                countryName={countryName}
                leagues={leagues}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
