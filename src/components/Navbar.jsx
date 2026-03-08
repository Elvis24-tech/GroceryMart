import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        GroceryMart
      </h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>

      <input
        type="text"
        placeholder="Search groceries..."
        className="px-3 py-1 rounded text-black"
      />

    </nav>
  );
};

export default Navbar;