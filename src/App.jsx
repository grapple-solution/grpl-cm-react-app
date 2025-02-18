import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
// import ProductList from "./components/products/product-list.component";

let productid = "S10_1678"

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
          "textarea-fields": ["productDescription"],
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
      dateFormat: "DD.MM.YYYY - HH:mm",
      enableFilter: true,
      enableLoadMore: true,
      filter: {
        limit: 5,
        // where: {
        //   msrp: 95.7
        // }
      },
      schema: {
        "field-properties": {
          "hidden-fields": ["productLine"],
          "additional-sorting-rules": ["productName ASC"],
        },
      },
    },
  });
});

import("App/productCard").then((module) => {
  const productCard = module.default;
  new productCard({
    target: document.getElementById("productcard"),
    props: {
      id: productid
    },
  });
});

import("App/Orders/find").then((module) => {
  const Orders = module.default;
  new Orders({
    target: document.getElementById("orders"),
    props: {
      dateFormat: "YYYY.MM.DD / HH:mm:ss"
    },
  });
});

import("App/Orders").then((module) => {
  const Orders = module.default;
  new Orders({
    target: document.getElementById("orders-admin"),
    props: {
      dateFormat: "YYYY.MM.DD - HH:mm:ss",
      schema: {
        actions: {
          edit: {
            removable: true,
            "with-confirmation": true,
          },
        },
        "field-properties": {
          "hidden-fields": ["comments"],
          "additional-sorting-rules": ["orderDate DESC"],
          "color-fields": [
            {
              field: "color",
              showOn: "background",
            }
          ],
        },
        "custom-bulk-actions": [
          {
            action: "New Action",
            bulkFn: (ids) => {
              // console.log("Bulk action", ids);
              // return ids;
            },
            singleFn: (row) => {
              console.log("Single action", row);
            }
          },
        ]
      },
      visibility: {
        readOnly: true,
        message: "You don't have permission to edit orders",
      },
      quickFilters: [
        {
          label: "ID gt 10418",
          filter: {
            id: { gt: 10418 },
          },
        },
        {
          label: "Customer IDs gt 180",
          filter: {
            customersId: { gt: 180 },
          },
        },
      ],
      enableFilter: true,
      enableLoadMore: true,
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
      <h2 className="text-2xl font-semibold my-4">Product card</h2>
      <div id="productcard"></div>
      <h2 className="text-2xl font-semibold my-4">Order list</h2>
      <div id="orders"></div>
      <h2 className="text-2xl font-semibold my-4">Order list - Admin</h2>
      <div id="orders-admin"></div>
    </main>
    <Footer />
  </div>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
