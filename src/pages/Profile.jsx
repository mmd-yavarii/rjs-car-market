import { Link, Outlet, useNavigate } from 'react-router-dom';

import styles from './style/Profile.module.css';

import { IoBookmarksOutline } from 'react-icons/io5';
import { IoAddCircleOutline } from 'react-icons/io5';
import { LuTickets } from 'react-icons/lu';
import { MdLogout } from 'react-icons/md';
import { GrUserAdmin } from 'react-icons/gr';
import { AiOutlineUser } from 'react-icons/ai';
import { useLogin } from '../context/LoginProvider';

const useremail = 'email@gmail.com';

function Profile({ isAdmin }) {
  const [token, setToken] = useLogin();
  const navigate = useNavigate();

  function logoutHandler() {
    const confirmation = confirm('Are You Sure ? ');
    if (confirmation) {
      localStorage.removeItem('token');
      setToken('');
    }
  }

  return (
    <>
      <div className={styles.profleSession}>
        <div className={styles.profile}>
          <AiOutlineUser opacity="0.6" />
        </div>
        <h3>{useremail}</h3>
      </div>

      <div>
        <Link className={styles.links} to="/bookmarks">
          Bookmarks <IoBookmarksOutline />
        </Link>

        <Link className={styles.links} to="/add">
          Add New Ads <IoAddCircleOutline />
        </Link>

        <Link className={styles.links} to="/myads">
          My Ads <LuTickets />
        </Link>

        {isAdmin && (
          <Link className={styles.links} to="/admin">
            Admin Panel <GrUserAdmin />
          </Link>
        )}

        <button className={styles.logout} onClick={logoutHandler}>
          Logout <MdLogout />
        </button>

        <Outlet />
      </div>
    </>
  );
}

export default Profile;
