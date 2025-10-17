import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Table, Button } from "react-bootstrap";

function OrderSuccess() {
  const { state } = useLocation();
  const order = state?.order;

  if (!order) {
    return (
      <Container className="mt-5 text-center">
        <h3>Không có thông tin đơn hàng.</h3>
        <Button as={Link} to="/products" variant="primary" className="mt-3">
          Quay lại mua hàng
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-5 text-center">
      <h2>🎉 Cảm ơn bạn đã đặt hàng!</h2>
      <p>Mã đơn: #{order.id}</p>
      <p>Ngày đặt: {order.date}</p>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Sản phẩm</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{(item.price * item.qty).toLocaleString()} ₫</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4>Tổng cộng: {order.total.toLocaleString()} ₫</h4>
      <Button as={Link} to="/products" variant="primary" className="mt-3">
        Tiếp tục mua sắm
      </Button>
    </Container>
  );
}

export default OrderSuccess;
