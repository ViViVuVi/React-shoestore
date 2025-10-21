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
import { Container, Button, Row, Col, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";


// Các sản phẩm nổi bật
const featuredProducts = [
  {
    id: 1,
    title: "Nike Air Max 270",
    img: "./src/image/shoe2.jpg",
    price: "4,500,000 VND",
  },
  {
    id: 2,
    title: "Nike Pegasus 40",
    img: "./src/image/shoe1.jpg",
    price: "3,900,000 VND",
  },
  {
    id: 3,
    title: "Nike ZoomX",
    img: "./src/image/shoe3.jpg",
    price: "5,200,000 VND",
  },
];

function Home() {
  return (
    <div>
      {/* Banner Carousel */}
      <Carousel fade controls={false} indicators={true} pause={false} interval={4000}>
        <Carousel.Item>
          {/* Video YouTube */}
          <video
            className="d-block w-100"
            src="./src/image/8533112-hd_1280_720_25fps.mp4" // đường dẫn tới video
            autoPlay
            loop
            muted
            playsInline
            style={{ objectFit: 'cover', height: '500px' }} // tuỳ chỉnh chiều cao
          />
          <Carousel.Caption>
            <h3>Fit for a King</h3>
            <p>The ultimate in lightweight containment and twitchy responsiveness.</p>
            <Button as={Link} to="/products" variant="light">
              Notify Me
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <video
            className="d-block w-100"
            src="./src/image/8533114-hd_1280_720_25fps.mp4" // đường dẫn tới video
            autoPlay
            loop
            muted
            playsInline
            style={{ objectFit: 'cover', height: '500px' }} // tuỳ chỉnh chiều cao
          />
          <Carousel.Caption>
            <h3>Nike ZoomX</h3>
            <p>Experience ultimate speed and comfort.</p>
            <Button as={Link} to="/products" variant="light">
              Mua ngay
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <Container className="my-5">
        <h2 className="mb-4 fw-bold">Shop by Sport</h2>
        <Row className="g-4">
          {/* Basketball */}
          <Col md={3} sm={6}>
            <div className="position-relative overflow-hidden rounded-4" style={{ height: "460px" }}>
              <img
                src="./src/image/pic1.jpg"
                alt="Basketball"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              <Button
                variant="light"
                className="position-absolute bottom-0 start-0 m-3 fw-semibold px-4 py-2 rounded-pill"
              >
                Shop Basketball
              </Button>
            </div>
          </Col>

          {/* Running */}
          <Col md={3} sm={6}>
            <div className="position-relative overflow-hidden rounded-4" style={{ height: "460px" }}>
              <img
                src="./src/image/pic2.jpg"
                alt="Running"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              <Button
                variant="light"
                className="position-absolute bottom-0 start-0 m-3 fw-semibold px-4 py-2 rounded-pill"
              >
                Shop Running
              </Button>
            </div>
          </Col>

          {/* Football */}
          <Col md={3} sm={6}>
            <div className="position-relative overflow-hidden rounded-4" style={{ height: "460px" }}>
              <img
                src="./src/image/pic3.jpg"
                alt="Football"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              <Button
                variant="light"
                className="position-absolute bottom-0 start-0 m-3 fw-semibold px-4 py-2 rounded-pill"
              >
                Shop Football
              </Button>
            </div>
          </Col>

          {/* Training */}
          <Col md={3} sm={6}>
            <div className="position-relative overflow-hidden rounded-4" style={{ height: "460px" }}>
              <img
                src="./src/image/pic4.jpg"
                alt="Training"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              <Button
                variant="light"
                className="position-absolute bottom-0 start-0 m-3 fw-semibold px-4 py-2 rounded-pill"
              >
                Shop Training
              </Button>
            </div>
          </Col>
        </Row>
      </Container>




      {/* Container chính */}
      <Container className="mt-5">
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
    </div >
  );
}

export default Home;
