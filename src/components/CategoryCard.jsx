const CategoryCard = ({ title, image, onClick }) => {
    return (
      <div
        onClick={() => onClick(title)}
        className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl cursor-pointer"
      >
  
        <img
          src={image}
          className="h-24 mx-auto mb-3 rounded"
        />
  
        <h3 className="font-semibold text-lg">
          {title}
        </h3>
  
      </div>
    );
  };
  
  export default CategoryCard;