import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails"; 
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  const products = [
    // Fruits
    {id:1,name:"Apple",price:120,category:"Fruits",image:"/images/apple.jpg"},
    {id:2,name:"Banana",price:60,category:"Fruits",image:"/images/banana.jpg"},
    {id:3,name:"Orange",price:100,category:"Fruits",image:"https://www.health.com/thmb/OZgW2YQtFb9qJ3PbySNei3YdgPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Stocksy_txp5e95690asrw300_Medium_934585-e870449543284eed8aa4be52fc09a4ed.jpg"},
    {id:4,name:"Strawberry",price:150,category:"Fruits",image:"https://im.pluckk.in/unsafe/1920x0/uploads/30300-2.png"},

    // Vegetables
    {id:5,name:"Tomato",price:80,category:"Vegetables",image:"/images/tomato.jpg"},
    {id:6,name:"Carrot",price:70,category:"Vegetables",image:"https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/sites/default/files/20180929_BLP506.jpg"},
    {id:7,name:"Cabbage",price:90,category:"Vegetables",image:"https://hub.suttons.co.uk/wp-content/uploads/2025/01/suttons.cabbage.sunta_.jpg"},
    {id:8,name:"Spinach",price:50,category:"Vegetables",image:"https://www.dripworks.com/content/spinach-growing-guide-banner.jpg"},

    // Dairy
    {id:9,name:"Milk",price:90,category:"Dairy",image:"/images/milk.jpg"},
    {id:10,name:"Cheese",price:150,category:"Dairy",image:"https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt02cf680667522d24/66707e8470fb6fb1b0d72705/types-of-cheese-hero.jpg?q=70&width=3840&auto=webp"},
    {id:11,name:"Yogurt",price:80,category:"Dairy",image:"https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2024/11/AdobeStock_294324791-1024x681.jpeg"},
    {id:12,name:"Butter",price:120,category:"Dairy",image:"https://cdn.britannica.com/27/122027-050-EAA86783/Butter.jpg"},

    // Beverages
    {id:13,name:"Orange Juice",price:130,category:"Beverages",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkDlj_8JhG_6hrg2stlttBR14Xr_dO3Wsifw&s"},
    {id:14,name:"Soda",price:100,category:"Beverages",image:"https://www.tasteofhome.com/wp-content/uploads/2023/04/photo22-sodas.jpg"},
    {id:15,name:"Coffee",price:180,category:"Beverages",image:"https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee.png"},
    {id:16,name:"Tea",price:120,category:"Beverages",image:"https://cdn.gaiagoodhealth.com/wp-content/uploads/2024/08/07141124/green-tea-scaled.jpg"},
  ];

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">

        <Navbar />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products products={products} />} />
            <Route path="/products/:id" element={<ProductDetails products={products} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;