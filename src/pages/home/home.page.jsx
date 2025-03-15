import React from "react";
import Categories from "./components/categories.component";
import {
  QualityIcon,
  ShippingIcon,
  SatisfactionIcon,
} from "../../utils/icons.util";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Our Store
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our amazing collection of high-quality model vehicles and
          collectibles.
        </p>
      </div>
      <Categories />
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4">
            <span className="mb-4 block">
              <QualityIcon className="w-12 h-12 mx-auto text-blue-600" />
            </span>
            <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
            <p className="text-gray-600">
              Premium quality models with attention to detail
            </p>
          </div>
          <div className="p-4">
            <span className="mb-4 block">
              <ShippingIcon className="w-12 h-12 mx-auto text-blue-600" />
            </span>
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p className="text-gray-600">Quick and secure worldwide delivery</p>
          </div>
          <div className="p-4">
            <span className="mb-4 block">
              <SatisfactionIcon className="w-12 h-12 mx-auto text-blue-600" />
            </span>
            <h3 className="text-xl font-semibold mb-2">
              Satisfaction Guaranteed
            </h3>
            <p className="text-gray-600">
              100% satisfaction or money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
