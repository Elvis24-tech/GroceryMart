import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500); 
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg flex flex-col relative">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded mb-3"
      />
      <h2 className="font-bold text-lg">{product.name}</h2>
      <p className="text-green-600 font-semibold mb-3">KES {product.price}</p>
      <button
        onClick={handleAdd}
        className="bg-green-600 text-white py-2 rounded hover:bg-green-700 mt-auto transition"
      >
        Add to Cart
      </button>

      {added && (
        <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded shadow animate-bounce">
          Added!
        </div>
      )}
    </div>
  );
};

export default ProductCard;