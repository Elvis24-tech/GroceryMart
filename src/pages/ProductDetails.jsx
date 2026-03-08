import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetails = ({ products }) => {
  const { id } = useParams(); 
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false); // Added state

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <p className="p-10 text-center text-red-500">Product not found!</p>;
  }

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500); 
  };

  return (
    <div className="p-10 max-w-4xl mx-auto flex flex-col md:flex-row gap-10 relative">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 h-auto object-cover rounded"
      />
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-green-600 font-semibold text-xl">KES {product.price}</p>
        <p className="text-gray-700">
          Category: <span className="font-medium">{product.category}</span>
        </p>

        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-6 py-3 rounded-lg mt-4 hover:bg-green-700"
        >
          Add to Cart
        </button>
      </div>
      {added && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded shadow animate-bounce">
          Added!
        </div>
      )}
    </div>
  );
};

export default ProductDetails;