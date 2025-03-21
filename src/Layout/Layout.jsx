import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { LuUserRound } from 'react-icons/lu';
import { MdPhotoFilter } from 'react-icons/md';
import { IoArrowBack } from 'react-icons/io5';

import styles from './Layout.module.css';

function Layout({ children }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pageTitle = pathname.split('/').join(' ');

  return (
    <div>
      <header className={styles.header}>
        {pathname == '/' ? (
          <button>
            <MdPhotoFilter opacity="0.6" />
          </button>
        ) : (
          <button onClick={() => navigate(-1)}>
            <IoArrowBack opacity="0.6" />
          </button>
        )}

        <h4>{pathname == '/' ? 'Explore' : pageTitle}</h4>

        {!pathname.includes('profile') && !pathname.includes('login') && (
          <Link to="/profile">
            <LuUserRound opacity="0.6" />
          </Link>
        )}
      </header>

      {children}
    </div>
  );
}

export default Layout;
