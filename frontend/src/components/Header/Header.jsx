
import {useEffect, useRef} from "react";
import user from "../../assets/images/user.png";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";

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

]
const Header = () => {
  return <header className="header flex items-center">
     <div className="container">
     <div className="flex items-center justify-between">
      <div className="px-12">
        <img src={logo} alt=""/>
      </div>

      <div className="navigation">
        <ul className="menu flex items-center gap-[2.7rem]">
            {
            navLinks.map((link, index) => (
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

      <div className="flex items-center gap-4 px-6">
      <div className="hidden">
        <Link to='/'>
          <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
            <img src={user} className="w-full rounded-full" alt="" />
          </figure>
        </Link>
        </div>     
       <Link to='/login'>
        <button className="bg-purpleColor py-2 px-8 text-white font-[600] h-[44px] 
        flex items-center justify-center rounded-[50px]">Login</button>
       </Link>

       <span className="md : hidden">
        <BiMenu className="w-6 h-6 cursor-pointer"/>

       </span>

      </div>

     </div>
     </div>
    </header>
  
};
export default Header;