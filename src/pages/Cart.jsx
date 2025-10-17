import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("vite_shoe_shop_cart_v1")) || []);
  }, []);

  const updateQty = (id, qty) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: qty > 0 ? qty : 1 } : item
    );
    setCart(updated);
    localStorage.setItem("vite_shoe_shop_cart_v1", JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("vite_shoe_shop_cart_v1", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Giỏ hàng</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống. <Link to="/products">Mua ngay</Link></p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Tổng</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price.toLocaleString()} ₫</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.qty}
                      onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
                      style={{ width: "60px" }}
                    />
                  </td>
                  <td>{(item.price * item.qty).toLocaleString()} ₫</td>
                  <td>
                    <Button size="sm" variant="danger" onClick={() => removeItem(item.id)}>Xóa</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4>Tổng cộng: {total.toLocaleString()} ₫</h4>
          <Button as={Link} to="/checkout" variant="success">Thanh toán</Button>
        </>
      )}
    </Container>
  );
}

export default Cart;
