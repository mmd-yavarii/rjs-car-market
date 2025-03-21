import { useState } from 'react';
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

function useAlert() {
  const [alert, setAlert] = useState({ show: true });

  setTimeout(() => {
    setAlert({ show: false });
  }, 2000);

  return alert.show;
}

export default Alert;
export { useAlert };

// const showAlert = useAlert();
// {showAlert && <Alert message="hello this is an error alert message" isError={true} />}
