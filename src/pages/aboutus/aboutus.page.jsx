import React from "react";
import aboutusImage from "../../assets/images/aboutus.png";
import { MissionIcon, VisionIcon, ValuesIcon, PremiumQualityIcon, ExpertSupportIcon, CustomerSatisfactionIcon } from "../../utils/icons.util";

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <MissionIcon className="text-4xl mb-4 block mx-auto text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To provide collectors with the highest quality model vehicles while
            delivering exceptional customer service.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <VisionIcon className="text-4xl mb-4 block mx-auto text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600">
            To become the world's leading destination for premium collectible
            model vehicles.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <ValuesIcon className="text-4xl mb-4 block mx-auto text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <p className="text-gray-600">
            Quality, integrity, and customer satisfaction are at the heart of
            everything we do.
          </p>
        </div>
      </div>
      <div className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us?</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <MissionIcon className="text-2xl mr-4 text-blue-600" />
            <div>
              <h3 className="font-semibold mb-1">Premium Quality</h3>
              <p className="text-gray-600">
                All our models are carefully selected from top manufacturers.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <VisionIcon className="text-2xl mr-4 text-blue-600" />
            <div>
              <h3 className="font-semibold mb-1">Expert Support</h3>
              <p className="text-gray-600">
                Our knowledgeable team is always ready to assist you.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <ValuesIcon className="text-2xl mr-4 text-blue-600" />
            <div>
              <h3 className="font-semibold mb-1">Customer Satisfaction</h3>
              <p className="text-gray-600">
                We go above and beyond to ensure your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
