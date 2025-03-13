import { useState } from 'react';
import { CustomDatePicker } from '../CustomDatePicker';
import { SearchButton } from '../SearchButton';
import { SportSelector } from '../SportSelector';
import styles from './MatchesFilter.module.scss';
import { sportsMap } from '../../data/SportsMap';
import { Sport } from '../../types/SportType';
import { MultiValue, SingleValue } from 'react-select';

export const MatchesFilter = () => {
  const [sport, setSport] = useState<Sport>(sportsMap[0]);
  const [date, setDate] = useState<Date | null>(new Date());

  const handleSearch = () => {
    console.table({ sport: sport.value, date: date?.toLocaleDateString() });
  };

  return (
    <div className={styles.MatchesFilter}>
      <SportSelector
        options={sportsMap}
        value={sport}
        onChange={(value: SingleValue<Sport> | MultiValue<Sport>) =>
          setSport(value as Sport)
        }
      />
      <CustomDatePicker value={date} onChange={setDate} />
      <SearchButton onClick={handleSearch} />
    </div>
  );
};
