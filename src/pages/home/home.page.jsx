import React from "react";
import Categories from "./components/categories.component";

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
    </div>
  );
};

export default HomePage;
