import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      navigate(`/products?search=${search}`);
      setSearch("");
    }
  };

  return (
    <nav className="bg-green-700 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        GroceryMart
      </h1>

      <div className="flex gap-6 items-center">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>

        <Link to="/cart" className="flex items-center gap-1 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13L17 13M7 13l-2-8m0 0h18m-18 0L5 3m14 0l-1 5" />
          </svg>

          <span>Cart</span>

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search groceries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleSearch}
        className="px-3 py-1 rounded text-green-900 bg-amber-100 placeholder-green-700 border-2 border-amber-300 focus:outline-none focus:border-amber-400"
      />

    </nav>
  );
};

export default Navbar;