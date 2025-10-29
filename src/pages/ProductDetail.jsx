import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import "./ProductDetail.css";
import { useNavigate } from "react-router-dom";
function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImg, setSelectedImg] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [favourite, setFavourite] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const selected = products.find((p) => p.id === id);
    if (selected) {
      setProduct(selected);
      setSelectedImg(selected.image[0]);
    }
  }, [id]);

  if (!product) return <p className="loading">Loading...</p>;

  const handleAddToBag = () => {
    const cart =
      JSON.parse(localStorage.getItem("vite_shoe_shop_cart_v1")) || [];

    // Tìm sản phẩm trùng id + size
    const existingIndex = cart.findIndex(
      (item) => item.id === product.id && item.selectedSize === selectedSize
    );

    if (existingIndex !== -1) {
      // Nếu đã có → tăng số lượng
      cart[existingIndex].qty += 1;
    } else {
      // Nếu chưa có → thêm mới
      const newItem = {
        ...product,
        image: Array.isArray(product.image) ? product.image[0] : product.image, // chỉ lấy ảnh đầu tiên
        selectedSize,
        qty: 1,
      };
      cart.push(newItem);
    }

    localStorage.setItem("vite_shoe_shop_cart_v1", JSON.stringify(cart));
    alert("✅ Đã thêm vào giỏ hàng!");
  };

  const handleFavourite = () => setFavourite(!favourite);

  return (
    <>
      <div className="begin">
        {/* ================= PHẦN CHI TIẾT SẢN PHẨM ================= */}
        <div className="product-detail-container">
          {/* Cột ảnh */}
          <div className="left-column">
            <div className="thumbnail-list">
              {product.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={product.name}
                  className={`thumbnail ${selectedImg === img ? "active" : ""}`}
                  onClick={() => setSelectedImg(img)}
                />
              ))}
            </div>

            <div className="main-image">
              <img src={selectedImg} alt={product.name} />
            </div>
          </div>

          {/* Cột thông tin */}
          <div className="right-column">
            <h2>{product.name}</h2>
            <p className="category">
              {product.brand} • {product.category}
            </p>
            <h3 className="price">{product.price.toLocaleString("vi-VN")}₫</h3>

            <div className="size-section">
              <h5>Select Size</h5>
              <div className="sizes">
                {["EU 37.5", "EU 38", "EU 39", "EU 40", "EU 41"].map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${
                      selectedSize === size ? "selected" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="buttons">
              <button
                className="add-btn"
                onClick={handleAddToBag}
                disabled={!selectedSize}
              >
                Add to Bag
              </button>

              <button
                className="viewcart-btn"
                onClick={() => navigate("/cart")}
              >
                🛒 View Cart
              </button>

              <button className="fav-btn" onClick={handleFavourite}>
                {favourite ? "❤️" : "🤍"} Favourite
              </button>
            </div>
            <p className="desc">{product.description}</p>
          </div>
        </div>

        {/* ================= PHẦN MÔ TẢ NÂNG CAO ================= */}
        <div className="extra-more">
          <div className="tech-info">
            <h3>
              Next-level, full-length, responsive cushioning for the ultimate
              energised ride.
            </h3>

            <div className="tech-grid">
              <div className="tech-item">
                <p className="icon">🛣️</p>
                <p>Engineered for</p>
                <h4>Road running</h4>
              </div>
              <div className="tech-item">
                <p className="icon">👟</p>
                <p>Cushioning</p>
                <h4>Responsive</h4>
              </div>
              <div className="tech-item">
                <p className="icon">🪶</p>
                <p>Shoe weight</p>
                <h4>Approx. 275g (women's size 5.5)</h4>
              </div>
              <div className="tech-item">
                <p className="icon">📏</p>
                <p>Heel-to-toe drop</p>
                <h4>10mm</h4>
              </div>
            </div>

            <details className="tech-details">
              <summary>Tech specs</summary>
              <ul>
                <li>
                  Engineered for maximum responsiveness with a triple stack of
                  our most powerful running technology: ZoomX, Air Zoom and
                  ReactX foam.
                </li>
                <li>
                  The first running shoe with a full-length, sculpted Air Zoom
                  unit shaped to your foot.
                </li>
                <li>
                  The tried-and-tested Pegasus fit you trust, now lighter and
                  more breathable.
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
      <div className="feature-section">
        <h2>Features that perform</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <img src={product.image[0]} alt="Circular knit upper" />
            <h4>Circular knit upper</h4>
            <p>Next-level breathability keeps you cool mile after mile.</p>
          </div>

          <div className="feature-card">
            <img
              src={product.image[1]}
              alt="Our most responsive Pegasus ever"
            />
            <h4>Our most responsive Pegasus ever</h4>
            <p>
              ZoomX foam in the midsole and ReactX foam in the heel create a new
              cushioning system—for a smooth, propulsive ride.
            </p>
          </div>

          <div className="feature-card">
            <img
              src={product.image[2]}
              alt="First-ever sculpted Air Zoom unit"
            />
            <h4>First-ever sculpted Air Zoom unit</h4>
            <p>
              Shaped to your foot so you can activate the power of Air from
              heelstrike to toe-off.
            </p>
          </div>
        </div>
      </div>
      {/* ================= PHẦN GỢI Ý SẢN PHẨM ================= */}
      <div className="recommend-section">
        <h2>You Might Also Like</h2>
        <div className="recommend-grid">
          {products
            .filter((p) => p.id !== product.id) // loại sản phẩm hiện tại
            .slice(0, 3) // chỉ lấy 3 sản phẩm gợi ý
            .map((item) => (
              <div className="recommend-card" key={item.id}>
                <a href={`/#/product/${item.id}`}>
                  <img src={item.image[0]} alt={item.name} />
                </a>
                <div className="recommend-info">
                  <h4>{item.name}</h4>
                  <p>{item.category}</p>
                  <h5>{item.price.toLocaleString("vi-VN")}₫</h5>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
