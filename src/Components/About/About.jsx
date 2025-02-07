import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-700">
          Welcome to our website! We are passionate developers dedicated to building
          innovative and efficient web applications. Our goal is to provide seamless
          user experiences with high-quality design and performance.
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
          <ul className="list-disc text-left text-gray-700 mt-4 pl-6">
            <li>🚀 Fast and optimized web solutions</li>
            <li>🎨 Modern and responsive designs</li>
            <li>💡 Innovative problem-solving approaches</li>
            <li>🔧 Regular updates and maintenance</li>
            <li>📞 24/7 Support and Assistance</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-700 mt-2">
            We aim to empower businesses and individuals by providing cutting-edge
            technology solutions. Our team is dedicated to continuous learning and
            improvement to stay ahead in the industry.
          </p>
        </div>

        <div className="mt-8">
          <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
