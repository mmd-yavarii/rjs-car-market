import { createContext, useContext, useEffect, useState } from 'react';

const LoginContext = createContext();

const initialState = localStorage.getItem('token') || '';

function LoginProvider({ children }) {
  const [token, setToken] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  return <LoginContext.Provider value={{ token, setToken }}>{children}</LoginContext.Provider>;
}

function useLogin() {
  const { token, setToken } = useContext(LoginContext);
  return [token, setToken];
}

export default LoginProvider;
export { useLogin };
