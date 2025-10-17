// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // CSS chung nếu có

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* Route chính App */}
        <Route path="/" element={<App />}>
          {/* Các route con nếu App có Outlet */}
          <Route index element={<Home />} />                    {/* Trang chủ */}
          <Route path="products" element={<Products />} />     {/* Trang danh sách sản phẩm */}
          <Route path="product/:id" element={<ProductDetail />} /> {/* Chi tiết sản phẩm */}
          <Route path="cart" element={<Cart />} />             {/* Giỏ hàng */}
          <Route path="checkout" element={<Checkout />} />     {/* Thanh toán */}
          <Route path="order-success" element={<OrderSuccess />} /> {/* Cảm ơn đơn hàng */}
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
