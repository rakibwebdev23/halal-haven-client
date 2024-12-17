import MenuData from "../../../component/MenuData/MenuData";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderFood from "../OrderFood/OrderFood";
// import img from "../../../assets/cover/cover2.jpg";
import { Link } from "react-router-dom";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import HelmetShare from "../../../component/HelmetShare/HelmetShare";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Order = () => {
    const [, offeredItem, popularItem, pizzaItem, burgerItem, dessertItem, soupItem, saladItem, drinkItem] = MenuData();
    const { user } = useAuth();
    const [isAdmin] = useAdmin();

    // search 
    const [searchTerm, setSearchTerm] = useState("");

    // Filter function
    const filterItems = (items) => {
        if (!searchTerm) return items;
        return items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    };

    return (
        <div>
            <HelmetShare caption="Order"></HelmetShare>
            <div
                className="hero h-[500px]"
                style={{
                    backgroundImage: `url('https://i.ibb.co.com/HqZkhW6/cover2.jpg')`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md text-xl font-semibold">
                        <Link className="mr-2 text-orange-500 hover:underline" to="/">Home</Link>
                        <span className="text-2xl">/</span>
                        {
                            user && isAdmin && <Link to="/dashboard/adminHome" className="ml-2 text-green-500 hover:underline">Dashboard</Link>
                        }
                        {
                            user && !isAdmin && <Link to="/dashboard/userHome" className="ml-2 text-green-500 hover:underline">Dashboard</Link>
                        }

                        <div className="flex justify-center mt-5">
                            <div className="relative">
                                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 text-xl" />
                                <input
                                    type="text"
                                    placeholder="Search items..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="p-2 pl-10 rounded-md text-white bg-black bg-opacity-40 text-lg border border-orange-600"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <SectionTitle
                    subTitle="A summary of the items you've chosen"
                    title="Your Cart at Halal Haven"
                ></SectionTitle>
            </div>
            <div className="flex">
                <Tabs className="lg:flex w-full lg:mt-20 mt-12">
                    <TabList className="flex flex-col lg:w-1/4 space-y-2 font-bold uppercase text-white lg:px-8 px-4">
                        <Tab className="p-4 bg-orange-500 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">Offered Food</Tab>
                        <Tab className="p-4 bg-orange-500 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">Popular Food</Tab>
                        <Tab className="p-4 bg-orange-500 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">Pizza</Tab>
                        <Tab className="p-4 bg-orange-500 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">Burger</Tab>
                        <Tab className="p-4 bg-orange-500 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">Dessert</Tab>
                        <Tab className="p-4 bg-orange-500 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">Soup</Tab>
                        <Tab className="p-4 bg-orange-500 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">Salad</Tab>
                        <Tab className="p-4 bg-orange-500 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">Drinks</Tab>
                    </TabList>

                    <div className="lg:w-3/4 mx-auto p-4 mt-10 lg:mt-0 lg:ml-4 border-l border-gray-200">
                        <TabPanel><OrderFood items={filterItems(offeredItem)} /></TabPanel>
                        <TabPanel><OrderFood items={filterItems(popularItem)} /></TabPanel>
                        <TabPanel><OrderFood items={filterItems(pizzaItem)} /></TabPanel>
                        <TabPanel><OrderFood items={filterItems(burgerItem)} /></TabPanel>
                        <TabPanel><OrderFood items={filterItems(dessertItem)} /></TabPanel>
                        <TabPanel><OrderFood items={filterItems(soupItem)} /></TabPanel>
                        <TabPanel><OrderFood items={filterItems(saladItem)} /></TabPanel>
                        <TabPanel><OrderFood items={filterItems(drinkItem)} /></TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;