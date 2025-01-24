import React from "react";

const products = [
  {
    id: "S10_1678",
    productName: "1969 Harley Davidson Ultimate Chopper",
    productDescription:
      "This replica features working kickstand, front suspension, gear-shift lever, footbrake lever, drive chain, wheels and steering. All parts are particularly delicate due to their precise scale and require special care and attention.",
    productLine: "Motorcycles",
    productScale: "1:10",
    productVendor: "Min Lin Diecast",
    buyPrice: 48.81,
    msrp: 95.7,
    quantityInStock: 7933,
    productlinesId: "string",
  },
];

const ProductList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={`https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&q=80`}
              alt={product.productName}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold text-gray-900 flex-1">
                  {product.productName}
                </h2>
                <span className="text-sm font-medium text-gray-500">
                  {product.productScale}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {product.productDescription}
              </p>
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {product.productLine}
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  by {product.productVendor}
                </span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-blue-600">
                    ${product.msrp.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500">
                    Stock: {product.quantityInStock}
                  </span>
                </div>
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                  disabled={product.quantityInStock === 0}
                >
                  {product.quantityInStock === 0
                    ? "Out of Stock"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
