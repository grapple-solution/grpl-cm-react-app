import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import ProductList from "./components/products/product-list.component";

const App = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow bg-gray-50">
      <ProductList />
    </main>
    <Footer />
  </div>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

// import a module from the grapple UI modules (gruim)

// import("App/Products/find").then((module) => {
//   const MyProducts = module.default;
//   new MyProducts({
//     target: app,
//     layout: "auto",
//     props: {
//       filter: { limit: 10 },
//     },
//   });
// });
