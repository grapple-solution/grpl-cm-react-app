import React, { useEffect } from "react";

const Categories = () => {
  useEffect(() => {
    import("App/productCategories").then((module) => {
      const ProductCategories = module.default;
      new ProductCategories({
        target: document.getElementById("categories"),
      });
    });
  }, []);

  return <div id="categories"></div>;
};

export default Categories;
