import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import ProductList from "./components/products/product-list.component";

import("App/Products/count").then((module) => {
  const ProductCounter = module.default;
  new ProductCounter({
    target: document.getElementById("count"),
    props: {
      css: `
        * {
          font-size: 1.5rem;
          color: #d1d5db;
        }

        div {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
      `,
    },
  });
});

import("App/Products/findById").then((module) => {
  const Product = module.default;
  new Product({
    target: document.getElementById("product"),
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
      translation: {
        id: "ID",
        productName: "Product Name",
        productDescription: "Product Description",
        productLine: "Product Line",
        productScale: "Product Scale",
        productVendor: "Product Vendor",
        buyPrice: "Buy Price",
        msrp: "MSRP",
        quantityInStock: "Quantity In Stock",
        productlinesId: "Product Lines ID",
      },
      schema: {
        "field-properties": {
          "hidden-fields": ["productLine", "product-scale"],
        },
      },
    },
  });
});

import("App/Products/find").then((module) => {
  const Products = module.default;
  new Products({
    target: document.getElementById("products"),
    props: {
      css: `
        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          border: 1px solid #e5e7eb;
          padding: 0.5rem;
        }

        th {
          background: #f9fafb;
          text-align: left;
        }

        tr:nth-child(even) {
          background: #f9fafb;
        }

        tr:nth-child(odd) {
          background: #ffffff;
        }

        @media (max-width: 640px) {
          table {
            font-size: 0.875rem;
          }
        }
      `,
      translation: {
        id: "ID",
        productName: "Product Name",
        productDescription: "Product Description",
        productLine: "Product Line",
        productScale: "Product Scale",
        productVendor: "Product Vendor",
        buyPrice: "Buy Price",
        msrp: "MSRP",
        quantityInStock: "Quantity In Stock",
        productlinesId: "Product Lines ID",
      },
      enableFilter: true,
      enableLoadMore: true
    },
  });
});

const App = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow bg-gray-50">
      <div id="count"></div>
      <h2 className="text-2xl font-semibold my-4">One product</h2>
      <div id="product"></div>
      <h2 className="text-2xl font-semibold my-4">Product list</h2>
      <div id="products"></div>
      {/* <ProductList /> */}
    </main>
    <Footer />
  </div>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
