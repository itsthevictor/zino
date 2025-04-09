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
    <nav className='flex justify-between  bg-transparent p-8 fixed top-0 left-0 right-0 z-50 text-white font-oxanium'>
      <div className='ml-1'>
        <Logo />
      </div>
      <div className='flex justify-between items-center'>
        <div className='hidden md:flex gap-12 text-sm'>
          <Link to='/'>home</Link>
          <Link to='/about'>about</Link>
          <Link to='/contact'>contact</Link>
          {authData?.user ? (
            <button
              className='flex items-center gap-4'
              onClick={handleLogoutBtn}
            >
              logout
              <HiMiniUserCircle size={20} />
            </button>
          ) : (
            <Link to='/login'>login</Link>
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
