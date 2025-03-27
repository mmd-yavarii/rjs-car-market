import styles from './Alert.module.css';

import { TbAlertSquareRounded } from 'react-icons/tb';

function Alert({ message, isError = false }) {
  return (
    <div className={isError ? styles.error : styles.container}>
      <TbAlertSquareRounded fontSize="1.8rem" />
      <p>{message}</p>
    </div>
  );
}

function useAlertEffect(state, setState, newValue) {
  let timeOut;
  if (state) {
    timeOut = setTimeout(() => setState(newValue), 3000);
  }
  return () => clearTimeout(timeOut);
}

export default Alert;
export { useAlertEffect };

// useAlertEffect(alertData, setAlertData, false);
