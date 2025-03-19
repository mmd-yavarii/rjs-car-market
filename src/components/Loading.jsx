import { SyncLoader } from 'react-spinners';

import styles from '../styles/Loading.module.css';

function Loading() {
  return (
    <div className={styles.container}>
      <SyncLoader />
    </div>
  );
}

export default Loading;
