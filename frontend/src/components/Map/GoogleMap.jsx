// GoogleMap.js
import React from 'react';

const GoogleMap = () => {
  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow-md">
        <div className='text-center'>
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Find Us in Map</h2>
      </div>
      {/* Google Map iframe */}
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31741.800497179775!2d37.53507920281264!3d6.032419893229945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17babca0fbd42fa3%3A0xf2095efc036f510c!2sSikela%2C%20Arba%20Minch!5e0!3m2!1sen!2set!4v1715711986881!5m2!1sen!2set"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
