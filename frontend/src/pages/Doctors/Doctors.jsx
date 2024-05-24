import DoctorCard from "../../components/Doctors/DoctorCard";
import { doctors } from "../../assets/data/doctors";
import Testimonial from "../../components/Testimonial/Testimonial";


const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="text-[30px] font-[600] leading-2 text-headingColor">Find a Doctor</h2>
          <div className="max-w-[540px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search for Doctor"
            />
            <button className="btn mt-0 rou-[2px] rounded-r-md ">Search</button>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-[-60px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
     <section className="py-20 bg-gradient-to-r from-blue-200 to-blue-400">
        <div className="container">
          <div className="max-w-md mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">What Our Patients Say</h2>
            <p className="text-lg mb-8">Our patients are our priority. Read what they have to say about their experience with us.</p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
