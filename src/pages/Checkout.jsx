import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import axios from "axios";

const Checkout = () => {
  const { cart, clearCart, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handlePayNow = async () => {
    setError("");
    setMessage("");

    if (cart.length === 0) {
      setError("Your cart is empty!");
      return;
    }

    const cleanPhone = phone.replace(/\D/g, "");

    if (!/^254\d{9}$/.test(cleanPhone)) {
      setError("Please enter a valid Kenyan phone number starting with 254.");
      return;
    }

    setLoading(true);
    setMessage("⏳ Initiating Mpesa payment... Check your phone.");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/mpesa/stkpush/",
        { phone: cleanPhone, amount: totalAmount },
        { headers: { "Content-Type": "application/json" } }
      );

      const data = response.data;
      console.log("STK Push response:", data);

      if (data.ResponseCode === "0") {
        setMessage(
          `Please approve payment on your phone to complete the transaction,\nTotal: KES ${totalAmount}`
        );

        setTimeout(() => {
          clearCart();
          navigate("/");
        }, 9000);
      } else {
        setError(data.ResponseDescription || "Payment failed. Please try again.");
      }
    } catch (err) {
      console.error("STK Push error:", err.response?.data || err.message);
      setError("⚠️ Something went wrong. Please check the console for details.");
      setMessage("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-20 px-4 bg-[#faf9f6]">
      <div className="max-w-md w-full text-center flex flex-col gap-6 bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Checkout</h1>

        <input
          type="tel"
          placeholder="Enter your phone number (254XXXXXXXXX)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-green-600"
          disabled={loading}
        />

        {error && <div className="text-red-600 font-medium text-sm">{error}</div>}
        {message && (
          <div className="text-green-700 font-medium text-sm whitespace-pre-line">
            {message}
          </div>
        )}

        <div className="text-xl font-semibold">Total: KES {totalAmount}</div>

        <button
          onClick={handlePayNow}
          disabled={loading}
          className={`bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2 ${
            loading ? "cursor-not-allowed opacity-70" : ""
          }`}
          aria-busy={loading}
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