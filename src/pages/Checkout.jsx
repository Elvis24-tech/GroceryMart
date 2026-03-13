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
        "https://mpesa-backend-1rkj.onrender.com/api/mpesa/stkpush/",
        {
          phone: cleanPhone,
          amount: totalAmount,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = response.data;
      console.log("STK Push response:", data);

      if (data.ResponseCode === "0") {
        setMessage(
          `Please approve payment on your phone.\nTotal: KES ${totalAmount}`
        );

        setTimeout(() => {
          clearCart();
          navigate("/");
        }, 9000);
      } else {
        setError(
          data.ResponseDescription || "Payment failed. Please try again."
        );
      }
    } catch (err) {
      console.error("STK Push error:", err.response?.data || err.message);
      setError("⚠️ Something went wrong. Please try again.");
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
          placeholder="Enter phone number (254XXXXXXXXX)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-green-600"
          disabled={loading}
        />

        {error && <div className="text-red-600 text-sm">{error}</div>}

        {message && (
          <div className="text-green-700 text-sm whitespace-pre-line">
            {message}
          </div>
        )}

        <div className="text-xl font-semibold">
          Total: KES {totalAmount}
        </div>

        <button
          onClick={handlePayNow}
          disabled={loading}
          className={`bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default Checkout;