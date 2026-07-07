import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/products/${id}`).then(({ data }) => setProduct(data));
  }, [id]);

  if (!product) return <p className="container">Loading...</p>;

  const handleAddToCart = () => {
    addToCart(product, qty);
    navigate('/cart');
  };

  return (
    <div className="container product-detail">
      <img
        src={product.imageUrl || 'https://via.placeholder.com/400x300?text=Product'}
        alt={product.name}
      />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <p>{product.stock} in stock</p>
        <div className="qty-selector">
          <label>Qty:</label>
          <input
            type="number"
            min="1"
            max={product.stock}
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
          />
        </div>
        <button onClick={handleAddToCart} disabled={product.stock === 0}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
