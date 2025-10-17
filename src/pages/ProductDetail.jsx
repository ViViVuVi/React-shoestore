import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import products from "../data/products.json";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("vite_shoe_shop_cart_v1")) || [];
    const existing = cart.find((item) => item.id === product.id);
    if (existing) existing.qty += 1;
    else cart.push({ ...product, qty: 1 });
    localStorage.setItem("vite_shoe_shop_cart_v1", JSON.stringify(cart));
    alert("Đã thêm sản phẩm vào giỏ hàng!");
  };

  if (!product) return <Container className="mt-5">Không tìm thấy sản phẩm!</Container>;

  return (
    <Container className="mt-5">
      <Row>
        <Col md={5}>
          <Card>
            <Card.Img variant="top" src={product.image} />
          </Card>
        </Col>
        <Col md={7}>
          <h2>{product.name}</h2>
          <h4 className="text-danger">{product.price.toLocaleString()} ₫</h4>
          <p><strong>Thương hiệu:</strong> {product.brand}</p>
          <p><strong>Danh mục:</strong> {product.category}</p>
          <p>{product.description}</p>
          <Button variant="primary" onClick={addToCart}>Thêm vào giỏ hàng</Button>{" "}
          <Button as={Link} to="/cart" variant="outline-secondary">Xem giỏ hàng</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
