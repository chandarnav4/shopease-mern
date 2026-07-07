import { useState, useEffect } from 'react';
import api from '../api/axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get('/orders/myorders').then(({ data }) => setOrders(data));
  }, []);

  return (
    <div className="container">
      <h2>My Orders</h2>
      {orders.length === 0 && <p>You have no orders yet.</p>}
      {orders.map((order) => (
        <div key={order._id} className="order-card">
          <p><strong>Order ID:</strong> {order._id}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Total:</strong> ${order.totalPrice.toFixed(2)}</p>
          <ul>
            {order.items.map((item, i) => (
              <li key={i}>{item.name} x{item.quantity}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Orders;
