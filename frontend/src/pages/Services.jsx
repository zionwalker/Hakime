import React from "react";
import ServiceCard from "../components/Services/ServiceCard";
import { services } from "../assets/data/services";

const Services = () => {
  return (
    <section className="py-16 lg:py-20 bg-gray-100">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center text-headingColor mb-12">
          Explore Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <ServiceCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
