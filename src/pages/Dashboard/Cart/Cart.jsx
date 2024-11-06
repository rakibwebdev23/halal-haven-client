import useCart from "../../../hooks/useCart";
import CartItem from "./CartItem";

const Cart = () => {
    const [cart] = useCart();    
    const totalPrices = cart.reduce((total, item) => total + item.price, 0);
    const totalPrice = totalPrices.toFixed(2);

    return (
        <div>
            <div className="text-4xl font-bold md:flex justify-evenly items-center">
                <h2>Total Items: {cart.length}</h2>
                <h2>Total Price: {totalPrice}</h2>
                <button className="btn btn-primary">Pay</button>
            </div>
            <div>

                <div className="overflow-x-auto">
                    <table className="table mt-10">
                        {/* head */}
                        <thead className="bg-orange-400 p-2 text-xl">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="w-full">

                            {
                                cart.map((item, index) => <CartItem
                                    key={item._id}
                                    item={item}
                                    index={index}
                                ></CartItem>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;