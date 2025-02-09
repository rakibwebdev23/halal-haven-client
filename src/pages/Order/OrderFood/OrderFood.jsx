import FoodCart from "../../../component/FoodCart/FoodCart";

const OrderFood = ({ items }) => {

    return (
                <div className="grid lg:grid-cols-3 lg:gap-8 gap-10 mb-10">
                    {
                        items.map(item => <FoodCart
                            key={item._id}
                            item={item}
                        ></FoodCart>)
                    }
                </div>
    );
};

export default OrderFood;