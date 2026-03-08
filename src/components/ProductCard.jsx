const ProductCard = ({ product }) => {
    return (
      <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg">
  
        <img
          src={product.image}
          className="h-40 w-full object-cover rounded"
        />
  
        <h2 className="font-bold mt-2">
          {product.name}
        </h2>
  
        <p className="text-green-600 font-semibold">
          KES {product.price}
        </p>
  
        <button className="bg-green-600 text-white w-full py-2 mt-2 rounded">
          Add to Cart
        </button>
  
      </div>
    );
  };
  
  export default ProductCard;