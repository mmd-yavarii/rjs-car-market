import { useSearchParams } from 'react-router-dom';
import styles from './Search.module.css';

import { FiSearch } from 'react-icons/fi';
import { useRef } from 'react';

function Search() {
  const [query, setQuery] = useSearchParams();
  const inpValue = useRef();

  // query handler
  function searchHandler() {
    if (inpValue.current.length) {
      const urlSearchParams = new URLSearchParams(query);
      urlSearchParams.set('search', inpValue.current);
      setQuery(urlSearchParams, { replace: true });
    }
  }

  // input handler
  function changeHandler(event) {
    if (event.target.value) {
      inpValue.current = event.target.value;
    } else {
      const urlSearchParams = new URLSearchParams(query);
      urlSearchParams.delete('search');
      setQuery(urlSearchParams, { replace: true });
    }
  }

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search..." onChange={changeHandler} />

      <button onClick={searchHandler}>
        <FiSearch opacity="0.5" />
      </button>
    </div>
  );
}

export default Search;
