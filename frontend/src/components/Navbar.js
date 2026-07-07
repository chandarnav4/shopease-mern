import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="brand">ShopEase</Link>
      <div className="nav-links">
        <Link to="/cart">Cart ({cartItems.length})</Link>
        {user ? (
          <>
            <Link to="/orders">My Orders</Link>
            <span className="nav-user">Hi, {user.name}</span>
            <button onClick={handleLogout} className="link-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
