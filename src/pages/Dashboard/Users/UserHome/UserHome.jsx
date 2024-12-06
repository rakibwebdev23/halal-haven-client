import { useQuery } from "@tanstack/react-query";
import HelmetShare from "../../../../component/HelmetShare/HelmetShare";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaCartPlus, FaCcMastercard, FaDollarSign } from "react-icons/fa";

const UserHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    });
    const orders = stats.reduce((total, item) => total + item.price, 0);
    const allOrder = orders.toFixed(2);
    const totalOrder = parseFloat(allOrder);

    return (
        <div>
            <HelmetShare caption="Dashboard"></HelmetShare>
            <h1 className="text-3xl font-semibold">Hi, Welcome to <span className="text-orange-500">{user.displayName}</span></h1>
            <div className="shadow-transparent mt-10 w-full stats flex flex-col lg:flex-row">
                <div className="stat bg-orange-400">
                    <div className="stat-figure text-white">
                        <FaDollarSign className="text-4xl"></FaDollarSign>
                    </div>
                    <div className="stat-title font-bold">Total Paid Amount</div>
                    <div className="stat-value">$ {totalOrder}</div>
                </div>
                <div className="stat bg-orange-300">
                    <div className="stat-figure text-orange-600">
                        <FaCartPlus className="text-4xl"></FaCartPlus >
                    </div>
                    <div className="stat-title font-bold ">Total Orders</div>
                    <div className="stat-value">{stats.length}</div>
                </div>

                <div className="stat bg-orange-400">
                    <div className="stat-figure text-gray-600">
                        <FaCcMastercard className="text-4xl"></FaCcMastercard >
                    </div>
                    <div className="stat-title font-bold">Total Payment</div>
                    <div className="stat-value">{stats.length}</div>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col items-center gap-6 mt-16 min-h-screen mb-16 lg:mb-0">
                <div className="lg:w-1/2 p-10">
                    {user.photoURL !== null && <div className="avatar items-center ml-6 flex flex-col">
                        <div className="w-40 rounded-lg">
                            <img className="" src={user.photoURL} />
                        </div>
                        <h2 className="text-2xl font-bold mt-2">{ user.displayName}</h2>
                    </div>}
                </div>
                <div className="divider lg:divider-horizontal divider-warning lg:h-1/2"></div>
                <div className="lg:w-1/2 lg:p-10">
                    <h2 className="text-4xl font-bold mb-6">Your Activities</h2>
                    <p className="text-xl font-bold text-green-500 flex items-center gap-1 mb-2"><span className="text-orange-600"><FaCartPlus></FaCartPlus></span> Orders: {stats.length}</p>
                    <p className="text-xl font-bold text-red-600 flex items-center gap-1"><span className="text-black"><FaCcMastercard></FaCcMastercard></span>Payment: { stats.length}</p>
                    <p className="text-xl font-bold text-orange-600 flex items-center gap-1 mt-2"><span className="text-black"><FaDollarSign></FaDollarSign></span>Payment:$ {totalOrder}</p>
                </div>
            </div>
        </div>
    );
};

export default UserHome;