// import React from "react";
// import "./index.css";
// import { createRoot } from "react-dom/client";
// import Navbar from "./components/navbar/navbar.component";
// import Footer from "./components/footer/footer.component";
// import ProductList from "./components/products/product-list.component";

// const App = () => (
//   <div className="min-h-screen flex flex-col">
//     <Navbar />
//     <main className="flex-grow bg-gray-50">
//       <ProductList />
//     </main>
//     <Footer />
//   </div>
// );

// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<App />);

import("App/Products/findById").then((module) => {
  const MyProducts = module.default;
  new MyProducts({
    target: app,
    layout: "auto",
    props: {
      id: "S10_1678",
      css: `
        background: #ffffff;
        padding: 1rem;
        border-radius: 0.375rem;

        input {
          background: #f9fafb;
          border: 1px solid #d1d5db;
          padding: 0.5rem;
        }

        label div {
          color: #374151;
          margin-bottom: 0.25rem;
        }

        .grid {
          gap: 1rem;
        }

        @media (max-width: 640px) {
          padding: 0.75rem;
        }
      `,
      translations: {
        productName: "Product Name",
      },
      schema: {
        "field-properties": {
          "hidden-fields": ["productLine", "product-scale"],
        }
      }
    },
  });
});

// import("App/productList").then((module) => {
//   const MyProducts = module.default;
//   new MyProducts({
//     target: app
//   });
// });
