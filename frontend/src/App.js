import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  AddProduct,
  AddStore,
  Checkout,
  Dashboard,
  Inventories,
  InventoryDetails,
  InvoiceDetails,
  Invoices,
  ProductDetails,
  Products,
  StoreDetails,
  Stores,
} from "./pages";
import { useStateContext } from "./contexts/contextProvider";
import "./App.css";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* Settings Button */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{
                  background: "#ed7d31",
                  borderRadius: "50%",
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* Sidebar */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          {/* Nav + Main */}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            {/* Navbar */}
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            {/* main */}
            <div>
              <ThemeSettings />
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Pages */}
                <Route path="/products" element={<Products />} />
                <Route path="/product-details" element={<ProductDetails />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/stores" element={<Stores />} />
                <Route path="/add-stores" element={<Stores />} />
                <Route path="/store-details" element={<StoreDetails />} />
                <Route path="/inventories" element={<Inventories />} />
                <Route
                  path="/inventory-details"
                  element={<InventoryDetails />}
                />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/invoice-details" element={<InvoiceDetails />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
