import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [address, setAddress] = useState({ street: '', city: '', postalCode: '', country: '' });
  const [placing, setPlacing] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setAddress({ ...address, [e.target.name]: e.target.value });

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setPlacing(true);
    try {
      const items = cartItems.map((item) => ({
        product: item._id,
        name: item.name,
        quantity: item.qty,
        price: item.price,
      }));
      await api.post('/orders', { items, shippingAddress: address, totalPrice });
      clearCart();
      navigate('/orders');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to place order');
    } finally {
      setPlacing(false);
    }
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      <form onSubmit={handlePlaceOrder} className="form">
        <input name="street" placeholder="Street address" onChange={handleChange} required />
        <input name="city" placeholder="City" onChange={handleChange} required />
        <input name="postalCode" placeholder="Postal code" onChange={handleChange} required />
        <input name="country" placeholder="Country" onChange={handleChange} required />
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button type="submit" disabled={placing}>
          {placing ? 'Placing order...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
