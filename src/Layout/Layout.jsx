import { NavLink, useLocation } from 'react-router-dom';

import styles from './Layout.module.css';

import { GoHome, GoHomeFill } from 'react-icons/go';
import { PiShoppingCartLight, PiShoppingCartFill } from 'react-icons/pi';
import { RiUserLine, RiUserFill } from 'react-icons/ri';
import { RiUserSettingsLine, RiUserSettingsFill } from 'react-icons/ri';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function Layout({ children, isAdmin }) {
  const { pathname } = useLocation();

  return (
    <>
      {children}

      <footer className={styles.footer}>
        <div>
          <NavLink to="/" replace={true}>
            {pathname == '/' ? <GoHomeFill /> : <GoHome />}
            <span>Home</span>
          </NavLink>

          <NavLink to="/checkout" replace={true}>
            {pathname == '/checkout' ? <PiShoppingCartFill /> : <PiShoppingCartLight />}
            <span>Cart</span>
            <span className={styles.counter}>7</span>
          </NavLink>

          <NavLink to="/bookmarks" replace={true}>
            {pathname == '/bookmarks' ? <AiFillHeart /> : <AiOutlineHeart />}
            <span>Saved</span>
            <span className={styles.counter}>7</span>
          </NavLink>

          {isAdmin ? (
            <NavLink to="/profile/admin" replace={true}>
              {pathname == '/profile/admin' ? <RiUserSettingsFill /> : <RiUserSettingsLine />}
              <span>Admin</span>
            </NavLink>
          ) : (
            <NavLink to="/profile/user" replace={true}>
              {pathname == '/profile/user' ? <RiUserFill /> : <RiUserLine />}
              <span>User</span>
            </NavLink>
          )}
        </div>
      </footer>
    </>
  );
}

export default Layout;
