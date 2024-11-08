import { FaAddressBook, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { MdPayment, MdRateReview } from "react-icons/md";
import { IoCartSharp } from "react-icons/io5";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="w-66 min-h-screen bg-orange-400">
                <ul className="menu p-6 uppercase gap-4">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminHome">
                                <FaHome></FaHome>
                                Admin Home
                            </NavLink></li>
                            <li><NavLink to="/dashboard/addItems">
                                <FaUtensils></FaUtensils>
                                Add Items
                            </NavLink></li>
                            <li><NavLink to="/dashboard/manageItems">
                                <FaList></FaList>
                                Manage Items
                            </NavLink></li>
                            <li><NavLink to="/dashboard/manageBookings">
                                <FaBook></FaBook>
                                Manage Bookings
                            </NavLink></li>
                            <li><NavLink to="/dashboard/allUsers">
                                <FaUsers></FaUsers>
                                All Users
                            </NavLink></li>

                        </> : <>

                            <li><NavLink to="/dashboard/userHome"><FaHome></FaHome>User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink></li>
                            <li><NavLink to="/dashboard/cart"><IoCartSharp></IoCartSharp>My Cart({cart.length})</NavLink></li>
                            <li><NavLink to="/dashboard/bookings"><MdPayment></MdPayment>
                                Add Booking</NavLink></li>
                            <li><NavLink to="/dashboard/paymentHistory"><FaAddressBook></FaAddressBook>Payment History</NavLink></li>
                            <li><NavLink to="/dashboard/review"><MdRateReview></MdRateReview>Add Review</NavLink></li>
                        </>
                    }


                    <div className="divider text-white"></div>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/menuOffered"><FaHome></FaHome>Menu</NavLink></li>
                    <li><NavLink to="/contact"><FaEnvelope></FaEnvelope> Contact</NavLink></li>
                </ul>
            </div>

            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;