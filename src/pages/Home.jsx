import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="text-center mt-5">
      <h1>Chào mừng đến với ShoeShop</h1>
      <p className="text-secondary">
        Khám phá bộ sưu tập giày Nike mới nhất – chính hãng & thời thượng.
      </p>
      <Button as={Link} to="/products" variant="primary" size="lg">
        Mua ngay
      </Button>
      <Row className="mt-5">
        <Col>
          <img
            src="https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_1200,c_limit/nike-shoes-banner.jpg"
            alt="Nike Shoes"
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
