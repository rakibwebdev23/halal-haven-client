import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();

    return (
        <div className="flex">
            <div className="w-66 min-h-screen bg-orange-400">
                <ul className="menu p-6 uppercase gap-4">
                    <li><NavLink to="/dashboard/userHome"><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to="/dashboard/cart">My Cart({cart.length})</NavLink></li>
                    <div className="divider text-white"></div>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/menuOffered"><FaHome></FaHome>Menu</NavLink></li>
                </ul>
            </div>

            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;