import styles from './Filter.module.css';

interface IFilter {
    currentFilter: string;
    onFilterChange: (filter: string) => void;
}

const Filter = ({currentFilter, onFilterChange}: IFilter) => {
    return (
        <div className={styles.filters}>
            <p
                onClick={() => onFilterChange("all")}
                className={currentFilter === "all" ? `${styles.filter} ${styles.active}` : styles.filter}
            >All</p>
            <p onClick={() => onFilterChange("active")}
               className={currentFilter === "active" ? `${styles.filter} ${styles.active}` : styles.filter}
            >Active</p>
            <p
                onClick={() => onFilterChange("completed")}
                className={currentFilter === "completed" ? `${styles.filter} ${styles.active}` : styles.filter}
            >Completed</p>
        </div>
    );
};

export default Filter;