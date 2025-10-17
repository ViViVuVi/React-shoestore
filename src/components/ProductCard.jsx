import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={product.image} alt={product.name} style={{ height: 220, objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text><strong>{product.price.toLocaleString()} ₫</strong></Card.Text>
        <Button as={Link} to={`/product/${product.id}`} variant="primary" className="w-100">
          Xem chi tiết
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
