import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logos.png";
import useAuth from "../../../hooks/useAuth";
import { MdOutlineShoppingCart } from "react-icons/md";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error)
            )
    }

    return (
        <div className="navbar fixed z-10 max-w-screen-xl text-white bg-black bg-opacity-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-md dropdown-content rounded-box z-[1] mt-3 w-52 p-2">
                        <li><Link to="/">Home</Link></li>
                        {/* <li><Link to="/menuPopular">Menu</Link></li> */}
                        <li>
                            <a>Our Menu</a>
                            <ul className="p-2">
                                <li><Link to="/menuOffered">Offered</Link></li>
                                <li><Link to="/menuPopular">Popular</Link></li>
                                <li><Link to="/menuPizza">Pizza</Link></li>
                                <li><Link to="/menuBurger">Burger</Link></li>
                                <li><Link to="/menuDessert">Dessert</Link></li>
                                <li><Link to="/menuSoup">Soup</Link></li>
                                <li><Link to="/menuSalad">Salad</Link></li>
                                <li><Link to="/menuDrink">Drink</Link></li>

                            </ul>
                        </li>
                        <li><Link to="/order">Order</Link></li>
                        {user && <li><Link to="/dashboard/cart">
                            <button className="flex items-center gap-2">
                                <MdOutlineShoppingCart className="text-2xl font-bold text-orange-600"></MdOutlineShoppingCart>
                                <div className="badge bg-orange-600 border-none text-white font-bold p-2">{cart.length}</div>
                            </button>
                        </Link></li>}
                    </ul>
                </div>
                <Link className="flex items-center gap-2" to="/">
                    <img className="w-16 rounded-full" src={logo} alt="" />
                    <h2 className="text-2xl font-bold text-orange-500">Halal Haven</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-2 text-sm">
                    <li><Link to="/">Home</Link></li>
                    {/* <li><Link to="/menuPopular">Menu</Link></li> */}
                    <li>
                        <details>
                            <summary>Our Menu</summary>
                            <ul className="p-2 text-black">
                                <li><Link to="/menuOffered">Offered</Link></li>
                                <li><Link to="/menuPopular">Popular</Link></li>
                                <li><Link to="/menuPizza">Pizza</Link></li>
                                <li><Link to="/menuBurger">Burger</Link></li>
                                <li><Link to="/menuDessert">Dessert</Link></li>
                                <li><Link to="/menuSoup">Soup</Link></li>
                                <li><Link to="/menuSalad">Salad</Link></li>
                                <li><Link to="/menuDrink">Drink</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to="/order">Order</Link></li>
                    {user && <li><Link to="/dashboard/cart">
                        <button className="flex items-center gap-2">
                            <MdOutlineShoppingCart className="text-2xl font-bold text-orange-600"></MdOutlineShoppingCart>
                            <div className="badge bg-orange-600 border-none text-white font-bold p-2">{cart.length}</div>
                        </button>
                    </Link></li>}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <Link onClick={handleLogOut} className="">Sign Out</Link>
                        {user.photoURL !== null && <div className="avatar ml-6">
                            <div className="w-12">
                                <img className="rounded-full" src={user.photoURL} />

                            </div>
                        </div>}
                    </> : <Link to="/signin">Sign In</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;