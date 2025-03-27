import { useEffect, useRef, useState } from 'react';
import styles from './style/Login.module.css';

import { LiaEyeSolid, LiaEyeSlash } from 'react-icons/lia';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const usernameInp = useRef();
  const username = useRef();
  const password = useRef();

  useEffect(() => usernameInp.current.focus(), []);

  // submit form s
  function submitHandler() {
    console.log(username.current);
    console.log(password.current);
  }

  return (
    <div className={styles.form}>
      <span>enter "admin" for password to be an admin</span>

      <div className={styles.input}>
        <input type="text" placeholder="email" ref={usernameInp} onChange={(e) => (username.current = e.target.value)} />
      </div>

      <div className={styles.input}>
        <input type={showPassword ? 'text' : 'password'} placeholder="password" onChange={(e) => (password.current = e.target.value)} />
        <button onClick={() => setShowPassword((prev) => !prev)}>{showPassword ? <LiaEyeSlash /> : <LiaEyeSolid />}</button>
      </div>

      <button onClick={submitHandler} className={styles.submit}>
        Login
      </button>
    </div>
  );
}

export default Login;
