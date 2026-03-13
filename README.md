# 🛒 GroceryMart Frontend
A modern **grocery e-commerce frontend** built with **React, Vite, and Tailwind CSS**.  
Users can browse grocery products, manage a shopping cart, and complete payments using **M-Pesa STK Push**.

The frontend connects to a **Django REST API backend** deployed on Render, which handles payments via the **Safaricom Daraja API**.

---

##  Live Demo

**Frontend:**  
https://grocerymart-delta.vercel.app

**Backend API:**  
https://mpesa-backend-1rkj.onrender.com
https://mpesa-backend-1rkj.onrender.com/api/mpesa/stkpush/
https://mpesa-backend-1rkj.onrender.com/api/mpesa/callback/

---

## 🚀 Features

### 🛍 Product Browsing
- View available grocery products
- Responsive product cards
- Modern and clean UI

### 🛒 Shopping Cart
- Add products to cart
- Remove products from cart
- Real-time total calculation

### 📱 M-Pesa Payment Integration
- Secure **STK Push payments**
- Enter Safaricom phone number
- Payment prompt sent directly to the user's phone

### 💳 Checkout Flow
1. Add items to cart  
2. Proceed to checkout  
3. Enter Safaricom phone number  
4. Receive **M-Pesa STK Push prompt**  
5. Approve payment on your phone  

---

## 🧰Tech Stack

**Frontend:**  
- React  
- Vite  
- Tailwind CSS  
- Axios  

**Backend:**  
- Django  
- Django REST Framework  

**Payments:**  
- Safaricom Daraja API (M-Pesa STK Push)  

**Deployment:**  
- Frontend → Vercel  
- Backend → Render  

---

##  Project Structure

grocerymart-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CategoryCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Home.jsx
│   │   ├── ProductDetails.jsx
│   │   └── Products.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

# Installation
Clone the repository
- git clone https://github.com/Elvis24-tech/GroceryMart
- cd grocerymart-frontend
- Install dependencies
- Run development server:
npm run dev

# 🔗 API Integration

The frontend communicates with the backend using the following endpoint:

POST /api/mpesa/stkpush/
Example Request
{
  "phone": "254712345678",
  "amount": 500
}

This triggers an M-Pesa STK Push payment prompt on the user's phone.

# Mobile Optimization
- The frontend is fully responsive and optimized for mobile users:
- Responsive layouts for small screens
- Touch-friendly buttons
- Full-width checkout inputs
- Optimized spacing and fonts for readability

# Future Improvements
- Payment success page
- Order history
- User authentication
- Admin dashboard
- Product inventory system
- Real-time payment status tracking

# Author
- Elvis Muasya
Fullstack Developer

Skills: HTML, CSS, JavaScript, React, Tailwind CSS, Python, Django, Flask

# License
This project is for educational and portfolio purposes.