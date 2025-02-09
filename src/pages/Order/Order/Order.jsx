import { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaSearch } from "react-icons/fa";

import MenuData from "../../../component/MenuData/MenuData";
import OrderFood from "../OrderFood/OrderFood";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import HelmetShare from "../../../component/HelmetShare/HelmetShare";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import Container from "../../../component/Container/Container";

const Order = () => {
    const [
        ,
        offeredItem,
        popularItem,
        pizzaItem,
        burgerItem,
        dessertItem,
        soupItem,
        saladItem,
        drinkItem,
    ] = MenuData();
    const { user } = useAuth();
    const [isAdmin] = useAdmin();

    // Search state
    const [searchTerm, setSearchTerm] = useState("");

    // Filter items based on search
    const filterItems = (items) => {
        if (!searchTerm) return items;
        return items.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    return (
        <div>
            <HelmetShare caption="Order" />
            <div
                className="hero h-[70vh] bg-cover bg-center relative"
                style={{
                    backgroundImage: `url('https://i.ibb.co/dtPmHZk/delicious-pizza-indoors.jpg')`,
                }}
            >
                <div className="hero-overlay bg-black bg-opacity-50 absolute inset-0"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-lg mx-auto">
                        <div className="mb-4">
                            <Link className="text-orange-400 hover:underline mr-2" to="/">
                                Home
                            </Link>
                            <span className="text-lg">/</span>
                            {user && isAdmin ? (
                                <Link
                                    className="text-green-400 hover:underline ml-2"
                                    to="/dashboard/adminHome"
                                >
                                    Dashboard
                                </Link>
                            ) : user ? (
                                <Link
                                    className="text-green-400 hover:underline ml-2"
                                    to="/dashboard/userHome"
                                >
                                    Dashboard
                                </Link>
                            ) : null}
                        </div>

                        {/* Search */}
                        <div className="relative w-full">
                            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500" />
                            <input
                                type="text"
                                placeholder="Search for items..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full py-3 pl-12 pr-4 bg-white text-black rounded-full shadow-md focus:outline-none focus:ring focus:ring-orange-400"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <div className="my-12 text-center">
                    <SectionTitle
                        subTitle="A summary of the items you've chosen"
                        title="Explore Our Menu"
                    />
                </div>
                <div className="container mx-auto lg:flex lg:pt-10 pt-4">
                    <Tabs className="w-full lg:flex">
                        <TabList className="lg:w-1/4 space-y-3 text-lg font-semibold uppercase">
                            <Tab className="p-3 bg-orange-400 rounded-md text-white hover:bg-orange-600 transition cursor-pointer">
                                Offered Food
                            </Tab>
                            <Tab className="p-3 bg-orange-400 rounded-md text-white hover:bg-orange-600 transition cursor-pointer">
                                Popular Food
                            </Tab>
                            <Tab className="p-3 bg-orange-400 rounded-md text-white hover:bg-orange-600 transition cursor-pointer">
                                Pizza
                            </Tab>
                            <Tab className="p-3 bg-orange-400 rounded-md text-white hover:bg-orange-600 transition cursor-pointer">
                                Burger
                            </Tab>
                            <Tab className="p-3 bg-orange-400 rounded-md text-white hover:bg-orange-600 transition cursor-pointer">
                                Dessert
                            </Tab>
                            <Tab className="p-3 bg-orange-400 rounded-md text-white hover:bg-orange-600 transition cursor-pointer">
                                Soup
                            </Tab>
                            <Tab className="p-3 bg-orange-400 rounded-md text-white hover:bg-orange-600 transition cursor-pointer">
                                Salad
                            </Tab>
                            <Tab className="p-3 bg-orange-400 rounded-md text-white hover:bg-orange-600 transition cursor-pointer">
                                Drinks
                            </Tab>
                        </TabList>
                        <div className="lg:w-3/4 mt-8 lg:mt-0 lg:ml-8">
                            <TabPanel>
                                <OrderFood items={filterItems(offeredItem)} />
                            </TabPanel>
                            <TabPanel>
                                <OrderFood items={filterItems(popularItem)} />
                            </TabPanel>
                            <TabPanel>
                                <OrderFood items={filterItems(pizzaItem)} />
                            </TabPanel>
                            <TabPanel>
                                <OrderFood items={filterItems(burgerItem)} />
                            </TabPanel>
                            <TabPanel>
                                <OrderFood items={filterItems(dessertItem)} />
                            </TabPanel>
                            <TabPanel>
                                <OrderFood items={filterItems(soupItem)} />
                            </TabPanel>
                            <TabPanel>
                                <OrderFood items={filterItems(saladItem)} />
                            </TabPanel>
                            <TabPanel>
                                <OrderFood items={filterItems(drinkItem)} />
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </Container>
        </div>
    );
};

export default Order;