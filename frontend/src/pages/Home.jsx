import React from "react";
import featureImg1 from "../assets/images/feature.png";
import heroImg02 from "../assets/images/heroImg02.png";
import heroImg03 from "../assets/images/heroImg02.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature.png";
import faqImg from "../assets/images/heroImg01.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import PartnerSection from "../components/Partner/PartnerSection";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Blogs from "./../components/Blog/Blogs";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <>
      <section className="hero_section pt-20 2xl:h-[800px] bg-blue-800 flex items-center justify-center">
        <div className="container flex flex-col lg:flex-row gap-10 items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-3xl lg:text-5xl font-semibold text-white mb-6">
              Book Appointment, Get treatment.
            </h1>
            <p className="text-gray-200 text-lg mb-8">
              Hello family, we care for our patients. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn bg-indigo-800 text-white px-8 py-3 rounded-lg">
              Book Now
            </button>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <img src={featureImg1} alt="" className="h-[430px] lg:w-auto" />
          </div>
        </div>
      </section>

      {/* hero section ends here*/}

      <section className=" bg-slate-200 py-12">
        <div className="container mx-auto">
          <div className="lg:w-[450px] mx-auto">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-700 mb-3 text-center">
              Providing the Best Services
            </h2>
            <p className="text-lg text-center text-gray-600 mt-7">
              Get instant access to premium services from us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mt-12">
            <div className="py-8 px-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <img src={icon01} alt="Find Doctors" className="h-24 w-24" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-center text-gray-800">
                  Find Doctors
                </h2>
                <p className="text-base text-center text-gray-600 mt-2">
                  Find the right healthcare professional for your needs,
                  ensuring quality care every time.
                </p>
                <Link
                  to="/Doctors"
                  className="w-12 h-12 rounded-full border border-gray-400 border-solid mt-4 mx-auto flex items-center justify-center bg-white text-gray-800 hover:bg-primaryColor hover:text-white transition duration-300"
                >
                  <BsArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="py-8 px-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <img src={icon02} alt="Find Location" className="h-24 w-24" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-center text-gray-800">
                  Find Location
                </h2>
                <p className="text-base text-center text-gray-600 mt-2">
                  Locate healthcare facilities near you with ease, ensuring
                  access to convenient care.
                </p>
                <Link
                  to="/Locations"
                  className=" w-12 h-12 rounded-full border border-gray-400 border-solid mt-4 mx-auto flex items-center justify-center bg-white text-gray-800 hover:bg-primaryColor hover:text-white transition duration-300"
                >
                  <BsArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="py-8 px-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <img
                  src={icon03}
                  alt="Book Appointment"
                  className="h-24 w-24"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-center text-gray-800">
                  Book Appointment
                </h2>
                <p className="text-base text-center text-gray-600 mt-2">
                  Schedule appointments hassle-free, ensuring timely access to
                  healthcare services.
                </p>
                <Link
                  to="/Appointments"
                  className=" w-12 h-12 rounded-full border border-gray-400 border-solid mt-4 mx-auto flex items-center justify-center bg-white text-gray-800 hover:bg-primaryColor hover:text-white transition duration-300"
                >
                  <BsArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section ends here */}

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-3 text-center">
              Our Top Doctors
            </h2>
            <p className="text-lg text-center text-gray-600">
              Welcome to our platform! We are dedicated to providing the best
              healthcare solutions.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>

      <section className="container py-20">
        <div className="max-w-xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-4 text-center">
            Hakime Popular Services
          </h2>
          <p className="text-gray-600 text-lg text-center">
            Hakime provides comprehensive services for customers. Here are some
            of them.
          </p>
        </div>
        <ServiceList />
      </section>

      <section className="py-12">
        <Marquee>
          <PartnerSection />
        </Marquee>
      </section>
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row mt-[-20px]">
            <div className="xl:w-[700px]">
              <h2 className="heading">
                Get virtual treatment <br /> anytime
              </h2>
              <ul className="pl-4">
                <li className="text_para">
                  1. schedule appointment directly schedule appointment directly
                  helo there directly schedule appointment directly helo there
                </li>
                <li className="text_para">
                  2. schedule schedule appointment directly schedule appointment
                  directly helo there
                </li>
                <li className="text_para">
                  3. schedule appointment directly schedule appointment directly
                  helo there
                </li>
              </ul>
              <Link to="/">
                <button className="btn"> learn more </button>
              </Link>
            </div>
            <div className="relative z-10 xl:w-[700px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/*<About />*/}

      <div className="container ">
        <div className="w-3/4 mx-auto">
          <h2 className="heading text-center text-[35px] text-textColor font-[600]">
            {" "}
            Latest Blogs{" "}
          </h2>
          <p className="text-[19px] leading-[24px] text-textColor text-center mt-4 mb-4 ">
            Explore Articles
          </p>
        </div>
        <Blogs />
      </div>

      {/*<section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" className="w-[340px] mt-[-35px]" />
            </div>
            <div className="w-full md:w-1/2 ]">
              <h2 className="heading">
                Most Asked Questions
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
  </section>*/}
    </>
  );
};

export default Home;
