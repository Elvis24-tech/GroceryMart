import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-green-700 text-white py-20 px-10 flex flex-col sm:flex-row items-center justify-between gap-10">

      <div className="text-center sm:text-left max-w-lg">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Fresh Groceries Delivered
        </h1>

        <p className="text-xl mb-6">
          Buy fresh fruits, vegetables and essentials online
        </p>

        <Link
          to="/products"
          className="bg-white text-green-700 px-6 py-3 rounded-lg font-bold inline-block"
        >
          Shop Now
        </Link>
      </div>

      <img
       src="https://t4.ftcdn.net/jpg/15/58/16/51/360_F_1558165103_KfWU85Gb1kFtoEvxSehnZFbIyyW2BTNK.jpg"
       alt="Fresh groceries"
       className="w-full sm:w-1/2 max-w-xl rounded-xl shadow-lg"
/>
    </div>
  );
};

export default Hero;