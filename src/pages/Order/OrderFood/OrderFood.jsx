import FoodCart from "../../../component/FoodCart/FoodCart";

const OrderFood = ({items}) => {
    return (
        <div>
            <div className="md:grid grid-cols-3 gap-4">
                {
                    items.map(item => <FoodCart
                        key={item._id}
                        item={item}
                    ></FoodCart>)
                }
            </div>
        </div>
    );
};

export default OrderFood;