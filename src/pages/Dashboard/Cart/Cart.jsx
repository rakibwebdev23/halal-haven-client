import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import CartItem from "./CartItem";

const Cart = () => {
    const [cart] = useCart();    
    const totalPrices = cart.reduce((total, item) => total + item.price, 0);
    const prices = totalPrices.toFixed(2);
    const totalPrice = parseFloat(prices);

    return (
        <div>
            <div className="lg:text-4xl text-2xl font-bold lg:flex lg:justify-evenly text-center items-center space-y-4 lg:space-y-0">
                <h2>Total Items: {cart.length}</h2>
                <h2>Total Price:$ {totalPrice}</h2>
                {
                    cart.length ? <Link to="/dashboard/payment"><button className="btn btn-outline btn-success mt-6 lg:mt-0">Payment</button></Link> : <button disabled className="btn btn-primary">Payment</button>
                }
            </div>
            <div>

                <div className="overflow-x-auto">
                    <table className="table mt-10">
                        {/* head */}
                        <thead className="bg-orange-400 p-2 lg:text-xl">
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