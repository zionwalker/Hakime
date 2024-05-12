import React from 'react';
import aboutImg from "../../assets/images/abou.png";
import { Link } from 'react-router-dom';

const About = () => {
  return (
  <section>
    <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row mt-[-15px]'>
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                <img src={aboutImg} alt="" className='w-[400px]'/>
                <div className="absolute z-20 bottom-4 w-[190px] md:w-[300px] right-[-25%] md:right-[-7%]
                lg:right-[20%]">
                    {/*<img src={aboutCardImg} alt="" />*/}
                </div>
            </div>

            <div className="w-full lg:w-1/2 xl:w-[430px] order-1 lg:order-2 mt-0">
                <h2 className='heading'>one of the best in the nation</h2>
                <p className='text_para'>
                one of thhakime provide a comprenssive service for the coustomers ans some
              of are listed below hakime provide a comprenssive service for the coustomers ans some
              of are listed below hakime provide
                </p>
                <p className='text_para mt-[25px]'>
                one of the best in ne of the best in the nation ohakime provide a comprenssive service for the coustomers ans some
              of are listed below the best in the nation one of the best in the nation
                </p>
                <Link to='/'>
                     <button className='btn'> learn more</button>
                     </Link>
            </div>
        </div>

    </div>

  </section>
    
  );
};

export default About;