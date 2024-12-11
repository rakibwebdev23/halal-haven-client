const MenuCart = ({ item }) => {
    const { name, recipe, price, image } = item;
  
    return (
      <div className="group relative flex flex-col lg:flex-row items-center gap-6 p-6 rounded-lg shadow-lg bg-white overflow-hidden transition-all hover:shadow-2xl duration-300">
        {/* Image Section */}
        <div
          className="w-full lg:w-40 lg:h-40 h-56 rounded-t-lg lg:rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-transform duration-300 group-hover:scale-105"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover lg:object-center lg:rounded-full group-hover:brightness-110"
          />
        </div>
        {/* Content Section */}
        <div className="flex-1 text-center lg:text-left space-y-3 px-4">
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
            {name}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 lg:line-clamp-3">
            {recipe}
          </p>
        </div>
  
        {/* Price Section */}
        <div className="text-xl font-bold text-orange-600 flex items-center gap-1 justify-center lg:justify-end">
          <span className="text-2xl lg:text-3xl">$</span>
          {price}
        </div>
      </div>
    );
  };
  
  export default MenuCart;
  