// import React from "react";
// import { Container, Button, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <Container className="text-center mt-5">
//       <h1>Chào mừng đến với ShoeShop</h1>
//       <p className="text-secondary">
//         Khám phá bộ sưu tập giày Nike mới nhất – chính hãng & thời thượng.
//       </p>
//       <Button as={Link} to="/products" variant="primary" size="lg">
//         Mua ngay
//       </Button>
//       <Row className="mt-5">
//         <Col>
//           <img
//             src="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/abbc2d6e-05e7-4c9c-9060-3bbd090a1136/NIKE+ZOOM+VOMERO+5+SE.png"
//             alt="Nike Shoes"
//             className="img-fluid rounded shadow"
//             width={600}
//           />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Home;


import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import pic1 from "../image/pic1.avif";

const featuredProducts = [
  {
    id: 1,
    title: "Nike Air Max 270",
    img: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/3c1c9c5f-59b8-4b55-8f65-1f7b1a5a6f0b/air-max-270.png",
    price: "4,500,000 VND",
  },
  {
    id: 2,
    title: "Nike Pegasus 40",
    img: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/pegasus-40.jpg",
    price: "3,900,000 VND",
  },
  {
    id: 3,
    title: "Nike ZoomX",
    img: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/zoomx.png",
    price: "5,200,000 VND",
  },
];

function Home() {
  return (
    <Container className="mt-5">
      {/* Banner chính */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Chào mừng đến với ShoeShop</h1>
        <p className="lead text-secondary">
          Khám phá bộ sưu tập giày Nike mới nhất – chính hãng & thời thượng.
        </p>
        <Button as={Link} to="/products" variant="primary" size="lg">
          Mua ngay
        </Button>
        
      </div>

      {/* Hình ảnh lớn */}
      <Row className="mb-5 justify-content-center">
        <Col md={8}>
          <img
            src={pic1}
            // src="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/abbc2d6e-05e7-4c9c-9060-3bbd090a1136/NIKE+ZOOM+VOMERO+5+SE.png"
            alt="Nike Shoes"
            className="img-fluid rounded shadow-lg"
          />
        </Col>
      </Row>

      {/* Bộ sưu tập sản phẩm */}
      <h2 className="mb-4 text-center">Sản phẩm nổi bật</h2>
      <Row>
        {featuredProducts.map((item) => (
          <Col key={item.id} md={4} className="mb-4">
            <Card className="h-100 shadow-sm hover-shadow">
              <Card.Img
                variant="top"
                src={item.img}
                alt={item.title}
                className="p-3"
              />
              <Card.Body className="text-center">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="text-primary fw-bold">{item.price}</Card.Text>
                <Button as={Link} to="/products" variant="outline-primary">
                  Mua ngay
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
