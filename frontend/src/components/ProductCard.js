import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <Link to={`/product/${product._id}`}>
      <img
        src={product.imageUrl || 'https://via.placeholder.com/250x200?text=Product'}
        alt={product.name}
      />
      <h3>{product.name}</h3>
    </Link>
    <p className="price">${product.price.toFixed(2)}</p>
    <p className="stock">{product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</p>
  </div>
);

export default ProductCard;
