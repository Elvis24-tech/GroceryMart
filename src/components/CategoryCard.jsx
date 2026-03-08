const CategoryCard = ({ title, image }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl">
  
        <img
          src={image}
          className="h-24 mx-auto mb-3"
        />
  
        <h3 className="font-semibold">
          {title}
        </h3>
  
      </div>
    );
  };
  
  export default CategoryCard;