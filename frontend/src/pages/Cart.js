import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQty, totalPrice } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!user) return navigate('/login');
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="container">
        <p>Your cart is empty. <Link to="/">Continue shopping</Link></p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item._id} className="cart-row">
          <span>{item.name}</span>
          <input
            type="number"
            min="1"
            value={item.qty}
            onChange={(e) => updateQty(item._id, Number(e.target.value))}
          />
          <span>${(item.price * item.qty).toFixed(2)}</span>
          <button onClick={() => removeFromCart(item._id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
