import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import App from "./EcommerceProject/App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./EcommerceProject/context/productcontex";
import { FilterContextProvider } from "../src/EcommerceProject/context/Filter_context";
import { CartProvider } from "../src/EcommerceProject/context/Cart_context";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <FilterContextProvider>
    <CartProvider>
      <App />
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
