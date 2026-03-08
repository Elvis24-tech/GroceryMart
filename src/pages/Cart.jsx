import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-6 text-green-700">
          Your Cart
        </h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-green-700">
        Your Cart
      </h1>

      {cart.map(item => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-white p-4 rounded shadow mb-4"
        >
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.name} className="h-20 w-20 object-cover rounded" />
            <div>
              <h2 className="font-bold">{item.name}</h2>
              <p>KES {item.price} x {item.quantity}</p>
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

      <h2 className="text-xl font-bold mt-4">Total: KES {total}</h2>
    </div>
  );
};

export default Cart;