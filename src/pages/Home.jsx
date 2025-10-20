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
            src="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/abbc2d6e-05e7-4c9c-9060-3bbd090a1136/NIKE+ZOOM+VOMERO+5+SE.png"
            alt="Nike Shoes"
            className="img-fluid rounded shadow"
            width={600}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
