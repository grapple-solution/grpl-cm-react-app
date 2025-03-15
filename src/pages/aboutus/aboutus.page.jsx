import React from "react";
import aboutusImage from '../../assets/images/aboutus.png';

const AboutUsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          About Us
        </h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <img
            src={aboutusImage}
            alt="Our Store"
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, our store has been dedicated to bringing the
              finest collection of model vehicles to enthusiasts around the
              world. What started as a small hobby shop has grown into a premier
              destination for collectors and model car enthusiasts.
            </p>
            <p className="text-gray-600">
              We take pride in offering an extensive selection of high-quality
              model cars, motorcycles, and other vehicles, each crafted with
              exceptional attention to detail and authenticity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
