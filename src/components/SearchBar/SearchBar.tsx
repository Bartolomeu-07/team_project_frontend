import styles from './SearchBar.module.scss';

export const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchBar}>
      <p className={styles.searchBar__text}>Matches</p>

      <div className={styles.searchBar__search}>
        <img src="./UI_Elements/search.svg" />
        
        <input
          className={styles.searchBar__search_input}
          type="text"
          placeholder="Search team"
        />
      </div>
    </div>
  );
};
