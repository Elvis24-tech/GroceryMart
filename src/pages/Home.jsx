import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

const Home = () => {

  const categories = [
    {title:"Fruits", image:"/images/fruits.png"},
    {title:"Vegetables", image:"/images/vegetables.png"},
    {title:"Dairy", image:"/images/dairy.png"},
    {title:"Beverages", image:"/images/beverages.png"}
  ];

  const products = [
    {id:1,name:"Apple",price:120,image:"/images/apple.jpg"},
    {id:2,name:"Milk",price:90,image:"/images/milk.jpg"},
    {id:3,name:"Tomato",price:80,image:"/images/tomato.jpg"},
    {id:4,name:"Banana",price:60,image:"/images/banana.jpg"}
  ];

  return (
    <div>

      <Hero />

      <div className="p-10">

        <h2 className="text-2xl font-bold mb-6">
          Categories
        </h2>

        <div className="grid grid-cols-4 gap-6 mb-10">
          {categories.map((c,i)=>(
            <CategoryCard key={i} {...c}/>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">
          Popular Products
        </h2>

        <div className="grid grid-cols-4 gap-6">
          {products.map((p)=>(
            <ProductCard key={p.id} product={p}/>
          ))}
        </div>

      </div>

    </div>
  );
};

export default Home;