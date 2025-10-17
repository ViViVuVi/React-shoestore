import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products.json";

function Products() {
  const [products, setProducts] = useState(productsData);
  const [filters, setFilters] = useState({
    keyword: "",
    brand: "",
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  const brands = [...new Set(productsData.map((p) => p.brand))];
  const categories = [...new Set(productsData.map((p) => p.category))];

  const handleFilter = () => {
    let filtered = productsData.filter((p) => {
      const matchKeyword = p.name.toLowerCase().includes(filters.keyword.toLowerCase());
      const matchBrand = filters.brand ? p.brand === filters.brand : true;
      const matchCategory = filters.category ? p.category === filters.category : true;
      const matchMin = filters.minPrice ? p.price >= Number(filters.minPrice) : true;
      const matchMax = filters.maxPrice ? p.price <= Number(filters.maxPrice) : true;
      return matchKeyword && matchBrand && matchCategory && matchMin && matchMax;
    });
    setProducts(filtered);
  };

  useEffect(() => {
    handleFilter();
  }, [filters]);

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Danh sách sản phẩm</h2>

      <Row className="mb-4">
        <Col md={3}>
          <Form.Control
            type="text"
            placeholder="Tìm theo tên..."
            value={filters.keyword}
            onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
          />
        </Col>
        <Col md={2}>
          <Form.Select
            value={filters.brand}
            onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
          >
            <option value="">Thương hiệu</option>
            {brands.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          >
            <option value="">Danh mục</option>
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Control
            type="number"
            placeholder="Giá từ"
            value={filters.minPrice}
            onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
          />
        </Col>
        <Col md={2}>
          <Form.Control
            type="number"
            placeholder="Đến"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
          />
        </Col>
        <Col md={1}>
          <Button variant="secondary" onClick={() => setFilters({ keyword: "", brand: "", category: "", minPrice: "", maxPrice: "" })}>
            Xóa
          </Button>
        </Col>
      </Row>

      <Row>
        {products.map((product) => (
          <Col key={product.id} md={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
