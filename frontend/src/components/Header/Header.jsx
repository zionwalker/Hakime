import React, { useRef, useEffect } from "react";
import user from "../../assets/images/user.png";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { useAuth } from '../../pages/AuthContext'; 
import { toast } from 'react-toastify';

const navLinks = [ 
  {
    path :'/home',
    display : 'Home'
  },
  {
    path :'/Doctors',
    display : 'Find Doctors'
  },
  {
    path :'/Services',
    display : 'Service'
  },
  {
    path :'/Contact',
    display : 'Contact'
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const { isAuthenticated, logout } = useAuth();
  const userRole = localStorage.getItem('userRole');

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        headerRef.current.classList.add('Sticky_header');
      } else {
        headerRef.current.classList.remove('Sticky_header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener('scroll', handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  const handleDashboardClick = () => {
    if (!isAuthenticated || userRole !== 'admin') {
      toast.error('You have no access to this page.', {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="px-12">
            <img src={logo} alt="Logo"/>
          </div>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={navClass => 
                      navClass.isActive
                      ? "text-primaryColor text-[16px] leading-7 font-[600]"
                      : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4 px-12">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                {userRole === 'admin' && (
                  <Link to='/admin/dashboard'>
                    <button onClick={handleDashboardClick} className="px-x font-[600] h-[44px] flex items-center justify-center ">
                      Dashboard
                    </button>
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="bg-blue-600 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to='/login'>
                <button className="bg-irisblueColor px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer"/>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
