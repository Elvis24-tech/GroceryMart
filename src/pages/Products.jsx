import ProductCard from "../components/ProductCard";

const Products = () => {

  const products = [
    {id:1,name:"Apple",price:120,image:"/images/apple.jpg"},
    {id:2,name:"Milk",price:90,image:"/images/milk.jpg"},
    {id:3,name:"Tomato",price:80,image:"/images/tomato.jpg"},
    {id:4,name:"Banana",price:60,image:"/images/banana.jpg"}
  ];

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        All Products
      </h1>

      <div className="grid grid-cols-4 gap-6">

        {products.map((p)=>(
          <ProductCard key={p.id} product={p}/>
        ))}

      </div>

    </div>
  );
};

export default Products;