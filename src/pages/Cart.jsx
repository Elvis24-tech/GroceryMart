import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-extrabold mb-6 text-green-700">Your Cart</h1>
        <p className="mb-6 text-gray-600">Your cart is currently empty.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-8">
        <h1 className="text-4xl font-extrabold text-green-700">Your Cart</h1>

        <div className="flex flex-col gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 md:h-20 md:w-20 object-cover rounded-lg"
                />
                <div>
                  <h2 className="font-bold text-lg">{item.name}</h2>
                  <p className="text-gray-600">
                    KES {item.price} x {item.quantity} = KES {item.price * item.quantity}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <div className="flex items-center border rounded">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                    }
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Total: KES {totalAmount}
          </h2>
          <button
            onClick={() => navigate("/checkout")}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition mt-4 md:mt-0"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;