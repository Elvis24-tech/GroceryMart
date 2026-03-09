import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#faf9f6] p-10 text-center">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Your Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <div className="p-10 max-w-4xl mx-auto flex flex-col gap-6">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Your Cart</h1>

        {cart.map(item => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white p-4 rounded shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 object-cover rounded"
              />
              <div>
                <h2 className="font-bold">{item.name}</h2>
                <p>KES {item.price} x {item.quantity} = KES {item.price * item.quantity}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}

        <h2 className="text-xl font-bold mt-4 text-right">
          Total: KES {total}
        </h2>

        <div className="text-right">
          <button
            onClick={() => navigate("/checkout")}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;