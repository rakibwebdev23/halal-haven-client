
const MenuCart = ({ item }) => {

    const { name, recipe, price, image } = item;

    return (
        <div className="flex items-center gap-6 rounded-l-full  ">
            <div className="flex items-center gap-4 text-justify">
                <img className="h-32 w-36 rounded-l-full rounded-b-full" src={image} alt="" />
                <div>
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p>{recipe}</p>
                </div>

            </div>
            <div className="mr-2">
                <p className="font-bold flex items-center gap-2"><span className="text-xl font-bold text-orange-600">$</span> {price}</p>
            </div>
        </div>
    );
};

export default MenuCart;