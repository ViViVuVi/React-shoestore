import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const cart = JSON.parse(localStorage.getItem("vite_shoe_shop_cart_v1")) || [];
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    const order = {
      id: Date.now(),
      ...form,
      total,
      items: cart,
      date: new Date().toLocaleString(),
    };

    const orders = JSON.parse(localStorage.getItem("vite_shoe_shop_orders_v1")) || [];
    orders.push(order);
    localStorage.setItem("vite_shoe_shop_orders_v1", JSON.stringify(orders));
    localStorage.removeItem("vite_shoe_shop_cart_v1");

    navigate("/order-success", { state: { order } });
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4">Thông tin thanh toán</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Họ và tên</Form.Label>
          <Form.Control
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Địa chỉ giao hàng</Form.Label>
          <Form.Control
            type="text"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
        </Form.Group>
        <h5 className="mt-3">Tổng thanh toán: {total.toLocaleString()} ₫</h5>
        <Button variant="success" type="submit" className="mt-3 w-100">
          Đặt hàng ngay
        </Button>
      </Form>
    </Container>
  );
}

export default Checkout;
