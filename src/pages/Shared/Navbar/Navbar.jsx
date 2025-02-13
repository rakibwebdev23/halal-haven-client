import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logos.png";
import useAuth from "../../../hooks/useAuth";
import { MdOutlineShoppingCart } from "react-icons/md";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import { MdKeyboardArrowDown, MdClose, MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";
import Container from "../../../component/Container/Container";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.log(error));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar w-full fixed z-10 font-poppin mx-auto py-2 lg:py-4 ${scrolled ? "bg-white text-orange-600" : "bg-black bg-opacity-90 text-white"}`}>
      <Container>
        <div className="navbar-start ">
          <Link to="/" className="flex items-center gap-2">
            <img
              className="w-6 lg:w-12 rounded-full"
              src={logo}
              alt="Halal Haven Logo"
            />
            <div className="flex flex-col">
              <span className={`lg:text-xl font-bold ${scrolled ? 'text-orange-600' : 'text-orange-500'}`}>
                Halal Haven
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile Navbar */}
        <div className="navbar-end lg:hidden flex items-end">
          <button onClick={toggleMenu} className=" px-2 py-1 rounded text-white bg-orange-600">
            {menuOpen ? (
              <MdClose className="text-2xl" />
            ) : (
              <MdMenu className="text-2xl" />
            )}
          </button>
          {menuOpen && (
            <ul
              className="absolute top-16 right-4 bg-white text-black rounded-box w-52 shadow-lg p-4 z-20"
            >
              <li>
                <Link to="/" onClick={toggleMenu} className="hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <details>
                  <summary className="cursor-pointer hover:text-orange-500">
                    Our Menu
                  </summary>
                  <ul className="p-2 bg-gray-100 z-50 rounded">
                    <li><Link to="/menuOffered" onClick={toggleMenu}>Offered</Link></li>
                    <li><Link to="/menuPopular" onClick={toggleMenu}>Popular</Link></li>
                    <li><Link to="/menuPizza" onClick={toggleMenu}>Pizza</Link></li>
                    <li><Link to="/menuBurger" onClick={toggleMenu}>Burger</Link></li>
                    <li><Link to="/menuDessert" onClick={toggleMenu}>Dessert</Link></li>
                    <li><Link to="/menuSoup" onClick={toggleMenu}>Soup</Link></li>
                    <li><Link to="/menuSalad" onClick={toggleMenu}>Salad</Link></li>
                    <li><Link to="/menuDrink" onClick={toggleMenu}>Drink</Link></li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/order" onClick={toggleMenu} className="hover:text-orange-500">
                  Order
                </Link>
              </li>
              {user && (
                <li>
                  <Link
                    to={isAdmin ? "/dashboard/adminHome" : "/dashboard/userHome"}
                    onClick={toggleMenu}
                  >
                    <button className="flex items-center gap-2">
                      <MdOutlineShoppingCart className="text-2xl text-orange-600" />
                      <div className="badge bg-orange-600 text-white font-bold p-2">
                        {cart.length}
                      </div>
                    </button>
                  </Link>
                </li>
              )}
              {user ? (
                <li>
                  <Link
                    onClick={() => {
                      handleLogOut();
                      toggleMenu();
                    }}
                    className="hover:text-orange-500"
                  >
                    Sign Out
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/signin" onClick={toggleMenu} className="hover:text-orange-500">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" onClick={toggleMenu} className="hover:text-orange-500">
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          )}
        </div>

        {/* Desktop Navbar */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2 text-sm font-bold">
            <li><Link to="/">Home</Link></li>
            <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                <span>Our Menu</span>
                <MdKeyboardArrowDown className="text-lg group-hover:rotate-180 transition-transform duration-300" />
              </div>
              <ul className="absolute hidden z-50 group-hover:flex flex-col bg-white text-black lg:mt-8 mt-2 p-4 rounded shadow-lg w-40 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <li><Link to="/menuOffered" className="hover:bg-orange-300 p-2 rounded transition-all duration-300">Offered</Link></li>
                <li><Link to="/menuPopular" className="hover:bg-orange-300 p-2 rounded transition-all duration-300">Popular</Link></li>
                <li><Link to="/menuPizza" className="hover:bg-orange-300 p-2 rounded transition-all duration-300">Pizza</Link></li>
                <li><Link to="/menuBurger" className="hover:bg-orange-300 p-2 rounded transition-all duration-300">Burger</Link></li>
                <li><Link to="/menuDessert" className="hover:bg-orange-300 p-2 rounded transition-all duration-300">Dessert</Link></li>
                <li><Link to="/menuSoup" className="hover:bg-orange-300 p-2 rounded transition-all duration-300">Soup</Link></li>
                <li><Link to="/menuSalad" className="hover:bg-orange-300 p-2 rounded transition-all duration-300">Salad</Link></li>
                <li><Link to="/menuDrink" className="hover:bg-orange-300 p-2 rounded transition-all duration-300">Drink</Link></li>
              </ul>
            </li>
            <li><Link to="/order">Order</Link></li>
            {user && (
              <li>
                <Link to={isAdmin ? "/dashboard/adminHome" : "/dashboard/userHome"}>
                  <button className="flex items-center gap-2">
                    <MdOutlineShoppingCart className="text-2xl text-orange-600" />
                    <div className="badge bg-orange-600 border-none text-white p-2">
                      {cart.length}
                    </div>
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Authentication */}
        <div className="navbar-end hidden lg:flex items-center">
          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className="text-sm font-bold text-white bg-orange-600 px-6 py-2 rounded-lg"
              >
                Sign Out
              </button>
              {user.photoURL && (
                <div className="avatar ml-4">
                  <div className="w-12 rounded-full">
                    <img src={user.photoURL} alt="User Avatar" />
                  </div>
                </div>
              )}
            </>
          ) : (
            <Link to="/signin" className="text-sm font-bold text-white bg-orange-600 px-6 py-2 rounded-lg">
              Sign In
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;