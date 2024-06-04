import React, { useRef, useEffect, useState } from "react";
import user from "../../assets/images/user.png";
import logo from "../../assets/images/logo.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useAuth } from "../../pages/AuthContext";
import { toast } from "react-toastify";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/FindDoctors",
    display: "Find Doctors",
  },
  {
    path: "/Services",
    display: "Service",
  },
  {
    path: "/Contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const userRole = localStorage.getItem("userRole");

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  const toggleUserMenu = () => setIsDropdownOpen(!isDropdownOpen); 

  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen); 

  const closeMenus = () => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    logout();
    navigate("/home");
  };

  const handleDashboardClick = () => {
    if (!isAuthenticated || userRole !== "admin") {
      toast.error("You have no access to this page.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleMobileMenuClick = () => {
    toggleMobileMenu();
  };

  const getProfileLink = () => {
    if (userRole === "doctor") {
      return "/doctors/completeprofile";
    } else if (userRole === "patient") {
      return "/patients/patientprofile";
    }
    return "/home"; 
  };

  return (
    <header className="header flex items-center bg-white" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="px-12">
            <img src={logo} alt="Logo" />
          </div>

          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    activeClassName="text-primaryColor text-[16px] leading-7 font-[600]"
                    className="text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    onClick={closeMenus} 
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4 px-12">
            {isAuthenticated &&
              (userRole === "doctor" || userRole === "patient") && (
                <div className="relative" ref={menuRef}>
                  <img
                    src={user}
                    alt="User"
                    className="w-[40px] h-[40px] rounded-full cursor-pointer"
                    onClick={toggleUserMenu} 
                  />
                  {isDropdownOpen && (
                    <div className="absolute right-0 top-[55px] bg-white border border-gray-200 shadow-lg rounded-lg p-2">
                      <Link to={getProfileLink()}>
                        <button className="block w-full text-left text-sm font-semibold py-2 px-4 text-gray-800 hover:bg-gray-200">
                          My Profile
                        </button>
                      </Link>
                      <button className="block w-full text-left text-sm font-semibold py-2 px-4 text-gray-800 hover:bg-gray-200">
                        Appointment
                      </button>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left text-sm font-semibold py-2 px-4 text-gray-800 hover:bg-gray-200"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            {isAuthenticated && userRole === "admin" && (
              <Link to="/admin/dashboard">
                <button
                  onClick={handleDashboardClick}
                  className="px-x font-[600] h-[44px] flex items-center justify-center "
                >
                  Dashboard
                </button>
              </Link>
            )}
            {!isAuthenticated && (
              <Link to="/login">
                <button className="bg-irisblueColor px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}
            <span className="md:hidden" onClick={handleMobileMenuClick}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="mobile-menu absolute top-[100%] bg-white shadow-lg p-4 md:hidden w-[fit] left-100">
          <ul className="flex flex-col">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  activeClassName="text-primaryColor text-[16px] leading-7 font-[600]"
                  className="text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                  onClick={closeMenus} 
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
