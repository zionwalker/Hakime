import React from 'react';
import Partner from "./Partners";
import doctorImg01 from "../../assets/images/health1.jpeg";
import doctorImg02 from "../../assets/images/health2.jpeg";
import doctorImg03 from "../../assets/images/health3.png";
import doctorImg04 from "../../assets/images/health4.png";
import doctorImg05 from "../../assets/images/health5.jpeg";
import doctorImg06 from "../../assets/images/health6.png";
import doctorImg07 from "../../assets/images/health7.png";
import doctorImg08 from "../../assets/images/health8.png";
import doctorImg09 from "../../assets/images/health9.png";


const partners = [
  { name: 'WHO', logo: doctorImg03 },
  { name: 'EDC', logo: doctorImg02 },
  { name: 'Hakim', logo: doctorImg01 },
  { name: 'Arada Hospital', logo: doctorImg04 },
  { name: 'Tikur Anbessa Hospital', logo: doctorImg05 },
  { name: 'Minilik Hospital', logo: doctorImg06 },
  { name: 'WHO', logo: doctorImg07 }, 
  { name: 'EDC', logo: doctorImg08 },
  { name: 'Hakim', logo: doctorImg09 },
  { name: 'Arada Hospital', logo: doctorImg01 },
  { name: 'Tikur Anbessa Hospital', logo: doctorImg02 },
  { name: 'Minilik Hospital', logo: doctorImg03 }
];

const PartnerSection = () => {
  return (
    <div className=" partner-section">
      <div className="partner-slider">
        {partners.map((partner, index) => (
          <Partner key={index} name={partner.name} logo={partner.logo} />
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
