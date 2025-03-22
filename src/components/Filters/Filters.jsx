import { useSearchParams } from 'react-router-dom';
import styles from './Filters.module.css';
import { useRef } from 'react';

function Filters({ carsData }) {
  const filterList = ['all', ...new Set(carsData.map((i) => i.category))];
  const [queries, setQueries] = useSearchParams();
  const category = queries.get('category');

  const filterBtns = useRef();

  // handle query strings
  function setQuery(event) {
    const value = event.target.innerText.toLowerCase();
    const searchParams = new URLSearchParams(queries);

    [...filterBtns.current.children].forEach((element) => {
      if (element != event.target) {
        element.className = styles.filters;
      } else {
        element.className = styles.filterSelected;
      }
    });
    if (value == 'all') {
      searchParams.delete('category');
      setQueries(searchParams, { replace: true });
      return;
    }
    searchParams.set('category', value);
    setQueries(searchParams, { replace: true });
  }

  return (
    <div className={styles.container} ref={filterBtns}>
      {filterList.map((i, index) => (
        <button
          onClick={setQuery}
          key={index}
          className={category ? (i == category ? styles.filterSelected : styles.filters) : i == 'all' ? styles.filterSelected : styles.filters}
        >
          {i}
        </button>
      ))}
    </div>
  );
}

export default Filters;
