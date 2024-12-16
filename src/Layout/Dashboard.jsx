import { FaAddressBook, FaEnvelope, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { MdOutlineRestaurantMenu, MdRateReview } from "react-icons/md";
import { IoCartSharp } from "react-icons/io5";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Sidebar */}
            <div className="w-full lg:w-72 bg-orange-400 text-white font-semibold shadow-md">
                <div className="flex items-center justify-center p-6 bg-orange-600">
                    <h2 className="text-2xl font-bold">Halal Haven</h2>
                </div>

                <ul className="menu p-6 space-y-4">
                    {isAdmin ? (
                        <>
                            <li><NavLink to="/dashboard/adminHome" className="flex items-center gap-2 text-white "><FaHome className="text-white" /> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItems" className="flex items-center gap-2 text-white "><FaUtensils className="text-white" /> Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/manageItems" className="flex items-center gap-2 text-white "><FaList className="text-white" /> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/allUsers" className="flex items-center gap-2 text-white "><FaUsers className="text-white" /> All Users</NavLink></li>
                        </>
                    ) : (
                        <>
                            <li><NavLink to="/dashboard/userHome" className="flex items-center gap-2 text-white "><FaHome className="text-white" /> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/cart" className="flex items-center gap-2 text-white "><IoCartSharp className="text-white" /> My Cart({cart.length})</NavLink></li>
                            <li><NavLink to="/dashboard/review" className="flex items-center gap-2 text-white "><MdRateReview className="text-white" /> Add Review</NavLink></li>
                            <li><NavLink to="/dashboard/paymentHistory" className="flex items-center gap-2 text-white "><FaAddressBook className="text-white" /> Payment History</NavLink></li>
                        </>
                    )}
                    <div className="divider text-white"></div>
                    <li><NavLink to="/" className="flex items-center gap-2 text-white "><FaHome className="text-white" /> Home</NavLink></li>
                    <li><NavLink to="/menuOffered" className="flex items-center gap-2 text-white "><MdOutlineRestaurantMenu className="text-white" /> Menu</NavLink></li>
                    <li><NavLink to="/contact" className="flex items-center gap-2 text-white "><FaEnvelope className="text-white" /> Contact</NavLink></li>
                </ul>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6 overflow-hidden">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
