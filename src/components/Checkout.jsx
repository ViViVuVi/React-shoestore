import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Checkout() {
  const navigate = useNavigate();

  // Demo giỏ hàng - sau có thể thay bằng Context hoặc localStorage
  const [cartItems] = useState([
    { id: "n7", quantity: 1 },
    { id: "n8", quantity: 2 },
  ]);

  // Ghép thông tin chi tiết từng sản phẩm
  const cartDetails = useMemo(() => {
    return cartItems
      .map((item) => {
        const product = products.find((p) => p.id === item.id);
        if (!product) return null;
        return {
          ...product,
          quantity: item.quantity,
          total: product.price * item.quantity,
        };
      })
      .filter(Boolean);
  }, [cartItems]);

  const totalAmount = cartDetails.reduce((sum, p) => sum + p.total, 0);
  const shipping = 30000;
  const finalTotal = totalAmount + shipping;

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
    payment: "cod",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Cảm ơn ${customer.name || "bạn"}! Đơn hàng trị giá ${finalTotal.toLocaleString()}₫ đã được ghi nhận.`
    );
    navigate("/"); // Quay lại trang chủ
  };

  // ✅ Hàm chuẩn để load ảnh đúng kể cả khi deploy ở subfolder
  const getImage = (path) => `${import.meta.env.BASE_URL}${path.replace("./", "/")}`;

  return (
    <div className="container py-4">
      <div className="row g-4">
        {/* Cột trái - Giỏ hàng + Form */}
        <div className="col-lg-8">
          {/* Giỏ hàng */}
          <div className="card shadow-sm mb-4 border-0">
            <div className="card-body">
              <h4 className="mb-4 text-primary fw-bold">🛒 Giỏ hàng của bạn</h4>
              {cartDetails.length === 0 ? (
                <p className="text-muted">Giỏ hàng trống.</p>
              ) : (
                cartDetails.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex align-items-center border-bottom pb-3 mb-3 hover-bg-light"
                  >
                    <img
                      src={getImage(item.image)}
                      alt={item.name}
                      width="90"
                      height="90"
                      className="rounded border me-3"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-1 fw-semibold">{item.name}</h6>
                      <small className="text-muted">
                        {item.brand} | {item.category}
                      </small>
                    </div>
                    <div className="text-end">
                      <p className="mb-0 fw-bold">
                        {item.price.toLocaleString()}₫
                      </p>
                      <p className="text-muted">x {item.quantity}</p>
                    </div>
                  </div>
                ))
              )}

              <div className="text-end mt-3">
                <h5 className="fw-bold text-danger">
                  Tạm tính: {totalAmount.toLocaleString()}₫
                </h5>
                <p className="text-secondary mb-1">
                  Phí giao hàng: {shipping.toLocaleString()}₫
                </p>
                <h5 className="fw-bold text-success">
                  Thành tiền: {finalTotal.toLocaleString()}₫
                </h5>
              </div>
            </div>
          </div>

          {/* Thông tin giao hàng */}
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="mb-4 text-primary fw-bold">📦 Thông tin giao hàng</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Họ và tên</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={customer.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={customer.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Địa chỉ giao hàng</label>
                  <textarea
                    name="address"
                    className="form-control"
                    rows="2"
                    value={customer.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">Phương thức thanh toán</label>
                  <select
                    name="payment"
                    className="form-select"
                    value={customer.payment}
                    onChange={handleChange}
                  >
                    <option value="cod">Thanh toán khi nhận hàng</option>
                    <option value="bank">Chuyển khoản ngân hàng</option>
                    <option value="momo">Ví MoMo</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary w-100 py-2">
                  ✅ Xác nhận đặt hàng
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Cột phải - Sản phẩm tương tự */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 sticky-top" style={{ top: "80px" }}>
            <div className="card-body">
              <h5 className="fw-bold mb-3 text-primary">👟 Sản phẩm tương tự</h5>
              {products.slice(0, 3).map((p) => (
                <div
                  key={p.id}
                  className="d-flex align-items-center mb-3 border-bottom pb-2"
                >
                  <img
                    src={getImage(p.image)}
                    alt={p.name}
                    width="60"
                    height="60"
                    className="rounded border me-2"
                    style={{ objectFit: "cover" }}
                  />
                  <div>
                    <p className="mb-0 fw-semibold">{p.name}</p>
                    <small className="text-muted">
                      {p.price.toLocaleString()}₫
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
