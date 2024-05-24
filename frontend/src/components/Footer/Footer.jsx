import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {RiLinkedinFill} from 'react-icons/ri';
import {AiFillYoutube, AiFillGithub, AiOutlineInstagram} from "react-icons/ai";

const socialLinks = [
  {
    path:'https://www.facebook.com/zedo',
    icon: <AiFillYoutube />,

  },
  {
    path:'https://www.facebook.com/zedo',
    icon: < AiFillGithub/>,

  },
  
  {
    path:'https://www.facebook.com/zedo',
    icon: < AiOutlineInstagram/>,

  },
  {
    path:'https://www.facebook.com/zedo',
    icon: < RiLinkedinFill/>,

  },

];

const quickLinks01 = [

  {
    path :'/home',
    display :"Home",
  },
  {
    path :'/',
    display :"About us",
  },
  {
    path :'/home',
    display :"Blog",
  },
  {
    path :'/',
    display :"Service",
  },
];

const quickLinks02 = [

  {
    path :'/',
    display :"Find doctor",
  },
  {
    path :'/',
    display :"Requiest appointment",
  },
  {
    path :'/',
    display :"Find location",
  },
 
  {
    path :'/',
    display :"Get opinion",
  },
 
];

const quickLinks03 = [

  {
    path :'/',
    display :"Donate",
  },
  {
    path :'/',
    display :"Contact us",
  },
];

const Footer = () => {

  const year = new Date().getFullYear()

  return <footer className="pb-16 pt-10 bg-[#323435] mt-7"> 
    <div className="container">
      <div className="flex justify-between flex-col md:flex-row flex-wrap  gap-[30px]">
        <div>

          <img src={logo} alt="" />
          <p className="text-[16px] leading-7 font-[400] text-footerColor mt-4">
            copyright @ {year} developed by Beteseb all rights reserved.  
            </p>
            <div className="flex items-center gap-3 mt-4">

              {socialLinks.map((link, index)=> <Link to={link.path} key={index} 
              className="w-9 h-9 border border-solid border-[#6b94e6] rounded-full
              flex items-center justify-center group hover:bg-yellow-400 bg-blue-600 hover:border-none">
                {link.icon}
              </Link>)}

            </div>
        </div>
        <div>
        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-yellowColor">
          Quick Links
          </h2>
          <ul>
            {quickLinks01.map((item,index)=> <li key={index} className="mb-4"><Link to={item.path}
            className="text-[14px] leading-7 font-[400] text-footerColor">
              {item.display}
            </Link></li>)}
          </ul>
      </div>
      <div>
        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-yellowColor">
          I want to
          </h2>
          <ul>
            {quickLinks02.map((item,index)=> <li key={index} className="mb-4"><Link to={item.path}
            className="text-[14px] leading-7 font-[400] text-footerColor">
              {item.display}
            </Link></li>)}
          </ul>
      </div>
      <div>
        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-yellowColor">
          Support
          </h2>
          <ul>
            {quickLinks03.map((item,index)=> <li key={index} className="mb-4"><Link to={item.path}
            className="text-[14px] leading-7 font-[400] text-footerColor">
              {item.display}
            </Link></li>)}
          </ul>
      </div>
      </div>
      

    </div>

  </footer>
  
  
};
export default Footer;