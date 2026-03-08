import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded mb-3"
      />
      <h2 className="font-bold text-lg">{product.name}</h2>
      <p className="text-green-600 font-semibold mb-3">KES {product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-600 text-white py-2 rounded hover:bg-green-700 mt-auto transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;