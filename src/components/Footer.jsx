import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <h5>ShoeShop</h5>
            <p>Giày Nike chính hãng – phong cách và chất lượng hàng đầu.</p>
          </Col>
          <Col md={4}>
            <h6>Liên kết nhanh</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Trang chủ</a></li>
              <li><a href="/products" className="text-light text-decoration-none">Sản phẩm</a></li>
              <li><a href="/cart" className="text-light text-decoration-none">Giỏ hàng</a></li>
              <li><a href="/checkout" className="text-light text-decoration-none">Thanh toán</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h6>Kết nối với chúng tôi</h6>
            <div className="d-flex gap-3 fs-4">
              <a href="#" className="text-light"><FaFacebook /></a>
              <a href="#" className="text-light"><FaInstagram /></a>
              <a href="#" className="text-light"><FaTwitter /></a>
              <a href="#" className="text-light"><FaYoutube /></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center text-secondary">
            © {new Date().getFullYear()} ShoeShop. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
