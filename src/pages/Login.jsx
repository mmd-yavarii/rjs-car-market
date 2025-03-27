import { useEffect, useRef, useState } from 'react';
import styles from './style/Login.module.css';

import { LiaEyeSolid, LiaEyeSlash } from 'react-icons/lia';
import Alert, { useAlertEffect } from '../components/Alert/Alert';
import axios from 'axios';
import { auth } from '../services/apis.js';
import { BeatLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../context/LoginProvider.jsx';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const usernameInp = useRef();
  const [username, setUsername] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');
  const [alertData, setAlertData] = useState({ isShow: false, isError: true, message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [token, setToken] = useLogin();

  useEffect(() => usernameInp.current.focus(), []);

  useEffect(() => {
    useAlertEffect(alertData, setAlertData, { isShow: false, isError: true, message: '' });
  }, [alertData.isShow]);

  // submit form info
  function submitHandler() {
    if (username && password) {
      setIsLoading(true);
      axios
        .post(auth, {
          username: username,
          password: password,
        })
        .then((res) => {
          setToken(res.data.token);
          navigate('/', { replace: true });
          setAlertData({ isShow: true, isError: false, message: 'Login successfuly' });
        })
        .catch((error) => {
          setAlertData({
            isShow: true,
            isError: true,
            message: error.message == 'Request failed with status code 401' ? 'user is not valied' : error.message,
          });
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
        <div className={styles.input}>
          <input type="text" value={username} placeholder="email" ref={usernameInp} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className={styles.input}>
          <input type={showPassword ? 'text' : 'password'} value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
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
