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

      if (data.ResponseCode === "0") {
        setMessage("You will receive a prompt shortly. Please approve payment on your phone.");
        setTimeout(() => {
          clearCart();
          navigate("/");
        }, 9000);
      } else {
        setError(data.ResponseDescription || "Payment failed. Please try again.");
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
    <div className="flex flex-col items-center justify-start min-h-screen pt-12 sm:pt-20 px-4 bg-[#faf9f6]">
      <div className="w-full max-w-md text-center flex flex-col gap-5 bg-white p-6 sm:p-8 rounded-xl shadow-md">

        <h1 className="text-2xl sm:text-3xl font-bold text-green-700">
          Checkout
        </h1>

        {/* Cart summary */}
        {cart.length > 0 && (
          <div className="text-left border border-gray-100 rounded-lg p-3 bg-gray-50">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Order Summary</p>
            <ul className="divide-y divide-gray-100">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between py-1.5 text-sm text-gray-700">
                  <span className="truncate pr-2">{item.name} × {item.quantity}</span>
                  <span className="shrink-0 font-medium">KES {item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="text-lg sm:text-xl font-semibold text-gray-800">
          Total: <span className="text-green-700">KES {totalAmount}</span>
        </div>

        <div className="flex flex-col gap-1.5 text-left">
          <label className="text-sm font-medium text-gray-600" htmlFor="phone">
            M-Pesa Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            placeholder="254XXXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-green-600"
            disabled={loading}
          />
          <p className="text-xs text-gray-400">Format: 254 followed by 9 digits</p>
        </div>

        {error && (
          <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
            {error}
          </div>
        )}

        {message && (
          <div className="text-green-700 text-sm bg-green-50 border border-green-200 rounded-lg px-4 py-3 whitespace-pre-line">
            {message}
          </div>
        )}

        <button
          onClick={handlePayNow}
          disabled={loading}
          className={`w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-4 rounded-xl text-base font-semibold hover:bg-green-700 active:scale-95 transition-all ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Processing...
            </>
          ) : (
            <>
              <span>Pay KES {totalAmount}</span>
            </>
          )}
        </button>

        <p className="text-xs text-gray-400">
          Secured by M-Pesa STK Push
        </p>

      </div>
    </div>
  );
};

export default Checkout;