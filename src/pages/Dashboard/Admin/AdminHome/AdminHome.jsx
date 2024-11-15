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

    const { data: stats = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get("/admin-stats")
            return res.data;
        }
    });

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get("/order-stats")
            return res.data;
        }
    });

    // bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // pie chart 
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return {name: data.category, value: data.totalRevenue}
    })

    return (
        <div>
            <HelmetShare caption="Dashboard"></HelmetShare>
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold">Hi, Welcome to <span className="text-orange-500">{user.displayName}</span></h1>
                {user.photoURL !== null && <div className="avatar ml-6">
                    <div className="w-20 rounded-full">
                        <img className="" src={user.photoURL} />
                    </div>
                </div>}
            </div>
            <div className="stats shadow-transparent mt-10 w-full">
                <div className="stat bg-orange-400">
                    <div className="stat-figure text-white">
                        <FaDollarSign className="text-4xl"></FaDollarSign>
                    </div>
                    <div className="stat-title font-bold ">Total Revenue</div>
                    <div className="stat-value">$ {stats.revenue}</div>
                </div>

                <div className="stat bg-gray-300">
                    <div className="stat-figure text-green-600">
                        <FaUserAlt className="text-4xl"></FaUserAlt>
                    </div>
                    <div className="stat-title font-bold">All Users</div>
                    <div className="stat-value">{stats.users}</div>
                </div>

                <div className="stat bg-gray-300">
                    <div className="stat-figure text-secondary">
                        <FaBook className="text-4xl"></FaBook>
                    </div>
                    <div className="stat-title font-bold">Total Menu Items</div>
                    <div className="stat-value">{stats.menuItems}</div>
                </div>
                <div className="stat bg-orange-400">
                    <div className="stat-figure text-black">
                        <FaTruckPickup className="text-4xl"></FaTruckPickup >
                    </div>
                    <div className="stat-title font-bold">Total Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                </div>
            </div>
            <div className="flex items-center gap-6 mt-10 bg-orange-100">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="totalQuantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 10]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Legend className="text-left"></Legend>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;