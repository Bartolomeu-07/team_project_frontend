import { useEffect } from 'react';
import axios from 'axios';
import { CountryMatches } from '../../components/CountryMatches';
import { CurrentMatches } from '../../components/CurrentMatches/CurrentMatches';
import { countryMatches } from '../../data/CountryMatches';
import style from './HomePage.module.scss';

const BACKEND = import.meta.env.VITE_BACKEND_URL;

export const HomePage = () => {
  useEffect(() => {
    const get = async () => {
      try {
        const response = await axios.get(`${BACKEND}/get`, {
          withCredentials: true,
        });

        return response.data;
      } catch (error) {
        console.error(error);
      }
    };

    get()
      .then((r) => console.log(r))
      .catch((e) => console.error(e));
  }, []);
  return (
    <>
      <div className={style.home}>
        <div className={style.home__list}>
          <CurrentMatches />

          {countryMatches.map((countryMatch) => {
            const { countryFlag, countryName, leagues } = countryMatch;
            return (
              <CountryMatches
                key={countryFlag}
                countryFlag={countryFlag}
                countryName={countryName}
                leagues={leagues}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
