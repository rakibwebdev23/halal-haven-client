import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaTruckPickup, FaUserAlt } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';
import HelmetShare from "../../../../component/HelmetShare/HelmetShare";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', '#074717', '#c8553c'];

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    // Fetching Stats
    const { data: stats = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get("/admin-stats");
            return res.data;
        },
    });

    // Fetching Chart Data
    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get("/order-stats");
            return res.data;
        },
    });

    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.totalRevenue };
    });

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <HelmetShare caption="Dashboard" />
            <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    Hi, Welcome <span className="text-orange-500">{user.displayName}</span>
                </h1>
                {user.photoURL && (
                    <div className="avatar mt-4 lg:mt-0">
                        <div className="w-20 rounded-full border-4 border-orange-300">
                            <img src={user.photoURL} alt="profile" />
                        </div>
                    </div>
                )}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {[
                    { title: "Total Revenue", value: `$${stats.revenue || 0}`, icon: <FaDollarSign />, color: "bg-orange-100" },
                    { title: "All Users", value: stats.users || 0, icon: <FaUserAlt />, color: "bg-green-100" },
                    { title: "Total Menu Items", value: stats.menuItems || 0, icon: <FaBook />, color: "bg-blue-100" },
                    { title: "Total Orders", value: stats.orders || 0, icon: <FaTruckPickup />, color: "bg-red-100" },
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className={`p-6 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105 ${item.color}`}
                    >
                        <div className="flex items-center gap-4 mb-2">
                            <div className="text-4xl text-gray-700">{item.icon}</div>
                            <p className="text-gray-600 font-medium">{item.title}</p>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">{item.value}</h2>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Bar Chart */}
                <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Order Stats</h2>
                    <BarChart
                        width={400}
                        height={300}
                        data={chartData}
                        margin={{ top: 20, right: 20, left: 0, bottom: 10 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="totalQuantity" fill="#82ca9d">
                            {chartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                {/* Pie Chart */}
                <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Revenue Distribution</h2>
                    <PieChart width={400} height={300}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                        >
                            {pieChartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;