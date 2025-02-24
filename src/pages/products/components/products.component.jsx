import React, { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    import("App/productCollector").then((module) => {
      const ProductCollector = module.default;
      new ProductCollector({
        target: document.getElementById("products"),
      });
    });
  }, []);

  return <div id="products"></div>;
};

export default Products;
