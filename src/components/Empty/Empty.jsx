import styles from './Empty.module.css';

import { MdErrorOutline } from 'react-icons/md';

function Empty({ title, message }) {
  return (
    <div className={styles.container}>
      <MdErrorOutline fontSize="1.6rem" />
      <h4>{title}</h4>
      <p>{message}</p>
    </div>
  );
}

export default Empty;
