import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
  const categories = [
    { title: "Fruits", image: "/images/fruits.png" },
    { title: "Vegetables", image: "/images/vegetables.png" },
    { title: "Dairy", image: "/images/dairy.png" },
    { title: "Beverages", image: "/images/beverages.png" },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      avatar: "SM",
      rating: 5,
      review: "Freshest groceries I've ever had delivered! The fruits were ripe and the vegetables crisp. Will definitely order again.",
    },
    {
      id: 2,
      name: "James K.",
      avatar: "JK",
      rating: 5,
      review: "Super fast delivery and great prices. The dairy section has everything I need for my family every week.",
    },
    {
      id: 3,
      name: "Amina R.",
      avatar: "AR",
      rating: 4,
      review: "Love the variety of categories. Easy to navigate and checkout was seamless. Highly recommend!",
    },
    {
      id: 4,
      name: "Daniel O.",
      avatar: "DO",
      rating: 5,
      review: "Quality is consistently excellent. My go-to for all grocery shopping now. The bananas were perfect!",
    },
  ];

  const StarRating = ({ count }) => (
    <div className="flex gap-0.5 mb-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div>
      <Hero />

      <div className="p-4 md:p-10">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Categories</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {categories.map((c, i) => (
            <CategoryCard key={i} {...c} />
          ))}
        </div>

        {/* Testimonials Section */}
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 mb-6 text-sm md:text-base">
          Trusted by thousands of happy shoppers
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <StarRating count={t.rating} />
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                "{t.review}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-green-100 text-green-700 font-bold text-xs flex items-center justify-center">
                  {t.avatar}
                </div>
                <span className="text-sm font-semibold text-gray-800">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;