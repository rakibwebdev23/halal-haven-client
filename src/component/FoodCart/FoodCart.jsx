
const FoodCart = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="card card-compact hover:bg-orange-300 bg-base-100 w-full shadow-xl transition-all  duration-500 ease-in-out transform hover:scale-105">
            <figure>
                <img className="h-full w-full object-cover transition-all duration-500 ease-in-out transform hover:scale-110 hover:opacity-80"
                    src={image}
                    alt="food" />
            </figure>
            <p className="top-32 ml-4 bg-black bg-opacity-60 text-white px-2 py-1 absolute"><span className="text-orange-500">$</span> {price}</p>
            <div className="card-body text-justify">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="relative px-6 py-2 text-white border-2 border-transparent bg-orange-600 transition-all duration-300 hover:border-orange-600 hover:bg-transparent hover:text-black uppercase rounded-l-xl rounded-t-xl">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;