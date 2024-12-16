const MenuCart = ({ item }) => {
    const { name, recipe, price, image } = item;

    return (
        <div className="group relative flex flex-col lg:flex-row items-center gap-6 p-6 rounded-xl shadow-md bg-white overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
            {/* Image Section */}
            <div className="w-full lg:w-40 lg:h-40 h-56 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center lg:text-left space-y-2 px-4">
                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                    {name}
                </h2>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed line-clamp-2 lg:line-clamp-3">
                    {recipe}
                </p>
            </div>

            {/* Price Section */}
            <div className="text-2xl font-bold text-orange-600 flex items-center justify-center lg:justify-end">
                <span className="text-3xl mr-1">$</span>
                <span>{price}</span>
            </div>

            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-orange-100 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        </div>
    );
};

export default MenuCart;