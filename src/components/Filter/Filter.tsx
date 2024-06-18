import styles from './Filter.module.css';
import clsx from 'clsx';

interface IFilter {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const Filter = ({ currentFilter, onFilterChange }: IFilter) => {
  return (
    <div className={styles.filters}>
      <p
        onClick={() => onFilterChange('all')}
        className={clsx(styles.filter, {
          [styles.active]: currentFilter === 'all',
        })}
      >
        All
      </p>
      <p
        onClick={() => onFilterChange('active')}
        className={clsx(styles.filter, {
          [styles.active]: currentFilter === 'active',
        })}
      >
        Active
      </p>
      <p
        onClick={() => onFilterChange('completed')}
        className={clsx(styles.filter, {
          [styles.active]: currentFilter === 'completed',
        })}
      >
        Completed
      </p>
    </div>
  );
};

export default Filter;
