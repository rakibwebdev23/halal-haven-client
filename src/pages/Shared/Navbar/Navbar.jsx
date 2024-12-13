import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logos.png";
import useAuth from "../../../hooks/useAuth";
import { MdOutlineShoppingCart } from "react-icons/md";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error)
            )
    }

    return (
        <div className="navbar fixed z-10 text-white bg-black bg-opacity-80 font-poppins py-3 px-4">
            {/* Logo */}
            <div className="navbar-start">
                <Link className="flex items-center gap-2" to="/">
                    <img className="w-12 lg:w-14 rounded-full" src={logo} alt="" />
                    <h2 className="lg:text-2xl text-xl font-bold text-orange-500">Halal Haven.</h2>
                </Link>
            </div>

            {/* Dropdown mobile navbar */}
            <div className="navbar-end lg:hidden">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-orange-500"
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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow-lg bg-white rounded-box w-52 text-black">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/order">Order</Link></li>
                        <li>
                            <details>
                                <summary className="cursor-pointer text-black">Our Menu</summary>
                                <ul className="p-2 bg-gray-100 rounded">
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
                        {/* Menu Cart */}
                        {user && isAdmin && <li><Link to="/dashboard/adminHome">
                            <button className="flex items-center gap-2">
                                <MdOutlineShoppingCart className="text-2xl text-orange-600"></MdOutlineShoppingCart>
                                <div className="badge bg-orange-600 text-white font-bold p-2">{cart.length}</div>
                            </button>
                        </Link></li>}
                        {user && !isAdmin && <li><Link to="/dashboard/userHome">
                            <button className="flex items-center gap-2">
                                <MdOutlineShoppingCart className="text-2xl text-orange-600"></MdOutlineShoppingCart>
                                <div className="badge bg-orange-600 text-white font-bold p-2">{cart.length}</div>
                            </button>
                        </Link></li>}
                        {/* Authentication */}
                        {user ? (
                            <>
                                <li><Link onClick={handleLogOut}>Sign Out</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/signin">Sign In</Link></li>
                                <li><Link to="/signup">Sign Up</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>

            {/* Desktop Navbar */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-2 text-sm font-semibold">
                    <li><Link to="/">Home</Link></li>
                    <li className="relative group">
                        <div className="cursor-pointer text-white">Our Menu</div>
                        <ul className="absolute hidden group-hover:block bg-white p-4 text-black mt-8 rounded shadow-lg">
                            <li><Link to="/menuOffered" className="block px-4 py-2 hover:bg-orange-300">Offered</Link></li>
                            <li><Link to="/menuPopular" className="block px-4 py-2 hover:bg-orange-300">Popular</Link></li>
                            <li><Link to="/menuPizza" className="block px-4 py-2 hover:bg-orange-300">Pizza</Link></li>
                            <li><Link to="/menuBurger" className="block px-4 py-2 hover:bg-orange-300">Burger</Link></li>
                            <li><Link to="/menuDessert" className="block px-4 py-2 hover:bg-orange-300">Dessert</Link></li>
                            <li><Link to="/menuSoup" className="block px-4 py-2 hover:bg-orange-300">Soup</Link></li>
                            <li><Link to="/menuSalad" className="block px-4 py-2 hover:bg-orange-300">Salad</Link></li>
                            <li><Link to="/menuDrink" className="block px-4 py-2 hover:bg-orange-300">Drink</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/order">Order</Link></li>
                    {user && isAdmin && <li><Link to="/dashboard/adminHome">
                        <button className="flex items-center gap-2">
                            <MdOutlineShoppingCart className="text-2xl font-bold text-orange-600"></MdOutlineShoppingCart>
                            <div className="badge bg-orange-600 border-none text-white font-bold p-2">{cart.length}</div>
                        </button>
                    </Link></li>}
                    {user && !isAdmin && <li><Link to="/dashboard/userHome">
                        <button className="flex items-center gap-2">
                            <MdOutlineShoppingCart className="text-2xl font-bold text-orange-600"></MdOutlineShoppingCart>
                            <div className="badge bg-orange-600 border-none text-white font-bold p-2">{cart.length}</div>
                        </button>
                    </Link></li>}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex font-semibold">
                {user ? (
                    <>
                        <Link onClick={handleLogOut} className="">Sign Out</Link>
                        {user.photoURL && <div className="avatar ml-4">
                            <div className="w-12 rounded-full">
                                <img src={user.photoURL} alt="User Avatar" />
                            </div>
                        </div>}
                    </>
                ) : (
                    <Link to="/signin">Sign In</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
