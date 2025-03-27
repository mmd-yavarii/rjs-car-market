import { useEffect, useRef, useState } from 'react';
import styles from './style/Login.module.css';

import { LiaEyeSolid, LiaEyeSlash } from 'react-icons/lia';
import Alert, { useAlertEffect } from '../components/Alert/Alert';
import axios from 'axios';
import { auth } from '../services/apis.js';
import { BeatLoader } from 'react-spinners';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const usernameInp = useRef();
  const username = useRef('mor_2314');
  const password = useRef('83r5^_');
  const [alertData, setAlertData] = useState({ isShow: false, isError: true, message: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => usernameInp.current.focus(), []);

  useEffect(() => {
    useAlertEffect(alertData, setAlertData, { isShow: false, isError: true, message: '' });
  }, [alertData.isShow]);

  // submit form info
  function submitHandler() {
    if (username.current && password.current) {
      setIsLoading(true);
      axios
        .post(auth, {
          username: username.current,
          password: password.current,
        })
        .then((res) => {
          console.log('Token:', res.data.token);
          setAlertData({ isShow: true, isError: false, message: 'Login successfuly' });
        })
        .catch((error) => {
          setAlertData({ isShow: true, isError: true, message: error.message });
        })
        .finally(() => setIsLoading(false));
    } else {
      setAlertData({ isShow: true, isError: true, message: 'please fill in inputs currectly' });
    }
  }

  return (
    <>
      {alertData.isShow && <Alert message={alertData.message} isError={alertData.isError} />}

      <div className={styles.form}>
        <span>enter "admin" for password to be an admin</span>

        <div className={styles.input}>
          <input type="text" value={username.current} placeholder="email" ref={usernameInp} onChange={(e) => (username.current = e.target.value)} />
        </div>

        <div className={styles.input}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password.current}
            placeholder="password"
            onChange={(e) => (password.current = e.target.value)}
          />
          <button onClick={() => setShowPassword((prev) => !prev)}>{showPassword ? <LiaEyeSlash /> : <LiaEyeSolid />}</button>
        </div>

        <button onClick={submitHandler} className={styles.submit}>
          {isLoading ? <BeatLoader size="10" color="#fff" /> : 'Login'}
        </button>
      </div>
    </>
  );
}

export default Login;
