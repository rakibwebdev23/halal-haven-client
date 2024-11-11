import MenuData from "../../../component/MenuData/MenuData";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderFood from "../OrderFood/OrderFood";
import img from "../../../assets/cover/cover2.jpg";
import { Link } from "react-router-dom";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import HelmetShare from "../../../component/HelmetShare/HelmetShare";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";

const Order = () => {
    const [, offeredItem, popularItem, pizzaItem, burgerItem, dessertItem, soupItem, saladItem, drinkItem] = MenuData();
    const { user } = useAuth();
    const [isAdmin] = useAdmin();

    return (
        <div>
            <HelmetShare caption="Order"></HelmetShare>
            <div
                className="hero h-[500px]"
                style={{
                    backgroundImage: `url(${img})`
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md text-2xl font-bold">
                        <Link className="mr-2 text-orange-500 hover:underline" to="/">Home</Link>
                        <span className="text-2xl">/</span>
                        {
                            user && isAdmin && <Link to="/dashboard/adminHome" className="ml-2 text-green-500 hover:underline">Dashboard</Link>
                        }
                        {
                            user && !isAdmin && <Link to="/dashboard/userHome" className="ml-2 text-green-500 hover:underline">Dashboard</Link>
                        }
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
                <Tabs className="flex w-full mt-20">
                    <TabList className="flex flex-col w-1/4 space-y-2 font-bold uppercase text-white">
                        <Tab className="p-4 bg-orange-500 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">Offered Food</Tab>
                        <Tab className="p-4 bg-orange-500 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">Popular Food</Tab>
                        <Tab className="p-4 bg-orange-500 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">Pizza</Tab>
                        <Tab className="p-4 bg-orange-500 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">Burger</Tab>
                        <Tab className="p-4 bg-orange-500 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">Dessert</Tab>
                        <Tab className="p-4 bg-orange-500 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">Soup</Tab>
                        <Tab className="p-4 bg-orange-500 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">Salad</Tab>
                        <Tab className="p-4 bg-orange-500 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">Drinks</Tab>
                    </TabList>

                    <div className="w-3/4 p-4 ml-4 border-l border-gray-200">
                        <TabPanel>
                            <div>
                                <OrderFood items={offeredItem}></OrderFood>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div>
                                <OrderFood items={popularItem}></OrderFood>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div>
                                <OrderFood items={pizzaItem}></OrderFood>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div>
                                <OrderFood items={burgerItem}></OrderFood>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div>
                                <OrderFood items={dessertItem}></OrderFood>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div>
                                <OrderFood items={soupItem}></OrderFood>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div>
                                <OrderFood items={saladItem}></OrderFood>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div>
                                <OrderFood items={drinkItem}></OrderFood>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;