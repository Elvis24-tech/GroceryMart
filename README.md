GroceryMart Frontend 🛒

A modern React-based grocery e-commerce frontend that allows users to browse products, add items to a cart, and complete payments using M-Pesa STK Push.

The application communicates with a Django REST backend hosted on Render to process payments and manage transactions.

Live Demo

Frontend:
https://grocerymart-delta.vercel.app

Backend API:
https://mpesa-backend-1rkj.onrender.com

Features
Product Browsing

View available grocery products

Responsive product cards

Clean mobile-friendly layout

Shopping Cart

Add products to cart

Remove items from cart

Real-time cart total calculation

M-Pesa Payment Integration

Secure STK Push payment

Enter Safaricom phone number

Payment prompt sent directly to user's phone

Checkout Flow

Add products to cart

Proceed to checkout

Enter phone number

Receive M-Pesa payment prompt

Approve payment on phone

Tech Stack

Frontend:

React

Vite

Tailwind CSS

Axios

Deployment:

Vercel

Backend API:

Django REST Framework

Hosted on Render

Payments:

Safaricom Daraja API (M-Pesa STK Push)

Project Structure
src
 ├── components
 │    ├── Navbar.jsx
 │    ├── ProductCard.jsx
 │
 ├── pages
 │    ├── Home.jsx
 │    ├── Cart.jsx
 │    ├── Checkout.jsx
 │
 ├── context
 │    └── CartContext.jsx
 │
 ├── App.jsx
 └── main.jsx
Installation

Clone the repository

git clone https://github.com/Elvis24-tech/GroceryMart

Go into the project folder

cd grocerymart-frontend

Install dependencies

npm install

Run development server

npm run dev
API Integration

The frontend communicates with the backend using the following endpoint:

POST /api/mpesa/stkpush/

Example request:

{
  "phone": "254712345678",
  "amount": 500
}

This triggers the M-Pesa STK Push payment request.

Mobile Optimization

The interface is optimized for mobile users since most M-Pesa transactions occur on smartphones.

Features include:

Responsive layout

Touch-friendly buttons

Full-width checkout inputs

Fast loading pages

Future Improvements

Payment success page

Order history

User authentication

Admin dashboard

Real product inventory system

Author

Elvis Muasya
Fullstack Developer

Tech Stack:

HTML

CSS

JavaScript

React

Tailwind CSS

Python

Django

Flask

License

This project is for educational and portfolio purposes.