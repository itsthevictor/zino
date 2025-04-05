import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/Wrappers/HeroNavbar';
import { HiBars3, HiMiniXMark, HiMiniUserCircle } from 'react-icons/hi2';
import { useState } from 'react';
import { mainFetch } from '../utils/customFetch';
import { FaUser } from 'react-icons/fa6';

const Navbar = ({ authData }) => {
  const [sideNav, setSideNav] = useState(false);
  const navigate = useNavigate();
  // console.log(authData);
  const handleLogoutBtn = async () => {
    await mainFetch('/auth/logout');
    window.location.reload();
    // navigate("/");
  };
  return (
    <Wrapper>
      <div className={sideNav ? 'side-nav active' : 'side-nav'}>
        <div className='nav-overlay'></div>
        <div className='nav-container'>
          <Link
            className='nav-link'
            to='/services'
            onClick={() => setSideNav(!sideNav)}
          >
            Services
          </Link>
          <Link
            className='nav-link'
            to='login'
            onClick={() => setSideNav(!sideNav)}
          >
            Sign up / Login
          </Link>
          <Link className='link-btn' to='adauga-anunt'>
            Listează o aventură
          </Link>

          <Link className='link-btn' to='account'>
            {/* {user.firstName} */}
          </Link>
        </div>
      </div>
      <nav>
        <div className='mobile-menu'>
          {!sideNav ? (
            <HiBars3
              className='burger-menu'
              size={30}
              onClick={() => setSideNav(!sideNav)}
            />
          ) : (
            <HiMiniXMark
              className='burger-menu'
              size={30}
              onClick={() => setSideNav(!sideNav)}
            />
          )}
        </div>

        <div className='logo-container'>
          <h3 className='logo'>
            <Link to='/'>zino</Link>
          </h3>
        </div>
        <div className='menu'>
          {authData.user ? (
            <button className='nav-btn' onClick={handleLogoutBtn}>
              Sign out
            </button>
          ) : (
            <Link className='nav-link user-link' to='login'>
              <FaUser className='user-icon' size={15} />
              <span>Contul tău</span>
            </Link>
          )}

          <Link className='link-btn' to='adauga-anunt'>
            Listează o aventură
          </Link>
        </div>
      </nav>
    </Wrapper>
  );
};
export default Navbar;
