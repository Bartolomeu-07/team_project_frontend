import styles from './SearchButton.module.scss';
import SearchIcon from '../../assets/icons/search.svg?react';

type SearchButtonProps = {
  onClick?: () => void;
};
export const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <button onClick={onClick} className={styles.SearchButton}>
      <SearchIcon className={styles.SearchButtonIcon} />
    </button>
  );
};
