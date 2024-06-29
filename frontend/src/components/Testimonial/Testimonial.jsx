import React from "react";
import Pagination from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { HiStar } from "react-icons/hi";
import Patientp from '../../assets/images/icon03.png';

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640:{
            slidesPerView:1,
            spaceBetween:0,
          },
          768:{
            slidesPerView:2,
            spaceBetween:20,
          },
          1024:{
            slidesPerView:3,
            spaceBetween:30,
          },
        }}
      >
        <SwiperSlide>
        <div className="swiper-slide"> {/* Add swiper-slide class */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3">
                  <img src={Patientp} alt="" className="h-14 w-14 rounded-full" />
                  <div>
                    <h4 className="text-lg font-semibold text-headingColor">Dibora habte</h4>
                    <div className="flex items-center gap-1">
                      <HiStar className="text-yellowColor w-5 h-5" />
                      <HiStar className="text-yellowColor w-5 h-5" />

                    </div>
                  </div>
                </div>
                <p className="text-base mt-3 text-textColor">
                   I suggest anyone who struggles with a disease to visit Hakime.
                </p>
              </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-slide"> {/* Add swiper-slide class */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3">
                  <img src={Patientp} alt="" className="h-14 w-14 rounded-full" />
                  <div>
                    <h4 className="text-lg font-semibold text-headingColor">Zerihun Zefine</h4>
                    <div className="flex items-center gap-1">
                      <HiStar className="text-yellowColor w-5 h-5" />
                      <HiStar className="text-yellowColor w-5 h-5" />
                      <HiStar className="text-yellowColor w-5 h-5" />
                      <HiStar className="text-yellowColor w-5 h-5" />
                      
                    </div>
                  </div>
                </div>
                <p className="text-base mt-3 text-textColor">
                  I got really well and awesome treatment here in Hakime.
                </p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide"> {/* Add swiper-slide class */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3">
                  <img src={Patientp} alt="" className="h-14 w-14 rounded-full" />
                  <div>
                    <h4 className="text-lg font-semibold text-headingColor">Gizachew Borako</h4>
                    <div className="flex items-center gap-1">
                      <HiStar className="text-yellowColor w-5 h-5" />
                      <HiStar className="text-yellowColor w-5 h-5" />
                      <HiStar className="text-yellowColor w-5 h-5" />
              
                    </div>
                  </div>
                </div>
                <p className="text-base mt-3 text-textColor">
                  I got really well and awesome treatment here in Hakime, and I suggest anyone who struggles with a disease to visit Hakime.
                </p>
              </div>
            </div>
        </SwiperSlide>
      
        {/* Add more SwiperSlides for additional testimonials */}
      </Swiper>
    </div>
  );
};

export default Testimonial;
