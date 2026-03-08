import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false); 

  const handlePayNow = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!phone.match(/^07\d{8}$/)) {
      alert("Please enter a valid phone number!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Payment Successful! Confirmation sent to ${phone}`);
      clearCart();
      setPhone("");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-20 px-4">
      <div className="max-w-md w-full text-center flex flex-col gap-6">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-green-600"
          disabled={loading}
        />

        <button
          onClick={handlePayNow}
          className={`bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition flex items-center justify-center gap-2 ${
            loading ? "cursor-not-allowed opacity-70" : ""
          }`}
          disabled={loading}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
              ></path>
            </svg>
          )}
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default Checkout;