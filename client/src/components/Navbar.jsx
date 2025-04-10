import { Link, useNavigate } from 'react-router-dom';

import { HiBars3, HiMiniXMark, HiMiniUserCircle } from 'react-icons/hi2';
import { useState } from 'react';
import { mainFetch } from '../utils/customFetch';
import { FaUser } from 'react-icons/fa6';
import Logo from './Logo';

const Navbar = ({ authData }) => {
  const [sideNav, setSideNav] = useState(false);
  const navigate = useNavigate();

  const handleLogoutBtn = async () => {
    await mainFetch('/auth/logout');
    window.location.reload();
    // navigate("/");
  };

  return (
    <nav className='flex justify-between items-start  bg-transparent p-7 fixed top-0 left-0 right-0 z-50 text-white font-oxanium'>
      <div className='ml-1'>
        <Link to='/'>
          {' '}
          <Logo />
        </Link>
      </div>
      <div className='flex justify-between items-center'>
        <div className='hidden md:flex gap-12 text-sm mr-1.5  '>
          <Link to='/' className='hover:text-orange-500 font-semibold'>
            home
          </Link>
          <Link to='/about' className='hover:text-orange-500 font-semibold'>
            about
          </Link>
          <Link to='/contact' className='hover:text-orange-500 font-semibold'>
            contact
          </Link>
          {authData?.user ? (
            <button
              className='flex items-center gap-4 hover:text-orange-500 font-semibold'
              onClick={handleLogoutBtn}
            >
              logout
              <HiMiniUserCircle size={20} />
            </button>
          ) : (
            <Link to='/login' className='hover:text-orange-500 font-semibold'>
              login
            </Link>
          )}
        </div>
        <div className='md:hidden'>
          {sideNav ? (
            <HiMiniXMark size={30} onClick={() => setSideNav(!sideNav)} />
          ) : (
            <HiBars3 size={30} onClick={() => setSideNav(!sideNav)} />
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
