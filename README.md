# ShopEase — MERN E-Commerce Platform

A full-stack e-commerce web application built with MongoDB, Express, React, and Node.js (MERN stack). Supports user authentication, product browsing, cart management, order placement, and an admin product management flow.

## Features
- JWT-based authentication (register/login) with hashed passwords (bcrypt)
- Product catalog with search & category filter
- Shopping cart (persisted per user in context + localStorage)
- Order placement and order history
- Protected routes (frontend) and protected API endpoints (backend middleware)
- Admin role for adding/editing/deleting products

## Tech Stack
**Frontend:** React, React Router, Axios, Context API
**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs

## Project Structure
```
ecommerce-mern/
├── backend/
│   ├── config/db.js
│   ├── models/ (User, Product, Order)
│   ├── routes/ (auth, products, orders)
│   ├── middleware/auth.js
│   └── server.js
└── frontend/
    └── src/
        ├── pages/ (Home, ProductDetail, Cart, Login, Register, Checkout, Orders)
        ├── components/ (Navbar, ProductCard, PrivateRoute)
        ├── context/ (AuthContext, CartContext)
        └── api/axios.js
```

## Setup

### Backend
```bash
cd backend
npm install
cp .env.example .env   # fill in MONGO_URI and JWT_SECRET
npm run dev            # starts on http://localhost:5000
```

### Frontend
```bash
cd frontend
npm install
npm start               # starts on http://localhost:3000
```

## API Endpoints
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | /api/auth/register | Register new user | No |
| POST | /api/auth/login | Login, returns JWT | No |
| GET | /api/products | List all products (search/category query) | No |
| GET | /api/products/:id | Get single product | No |
| POST | /api/products | Create product | Admin |
| PUT | /api/products/:id | Update product | Admin |
| DELETE | /api/products/:id | Delete product | Admin |
| POST | /api/orders | Place an order | User |
| GET | /api/orders/myorders | Get logged-in user's orders | User |

# shopease-mern
