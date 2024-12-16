import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import img from "../../../assets/logo/logos.png";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-20">
            <div className="container mx-auto px-6 lg:px-16 py-8 lg:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <div className="flex flex-col items-center md:items-start">
                        <img className="w-20 h-20 mb-4" src={img} alt="Logo" />
                        <h2 className="text-xl font-bold text-white">
                            HALAL HAVEN Restaurant
                        </h2>
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed text-center md:text-left">
                            Savor the taste of quality food and excellent service, since 1992.
                        </p>
                    </div>

                    {/* Navigation links */}
                    <nav className="flex flex-col gap-4 text-center md:text-left">
                        <h6 className="text-white text-lg font-semibold mb-2">Quick Links</h6>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-orange-500 transition duration-300 text-sm"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/menu"
                                    className="hover:text-orange-500 transition duration-300 text-sm"
                                >
                                    Menu
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="hover:text-orange-500 transition duration-300 text-sm"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="hover:text-orange-500 transition duration-300 text-sm"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/order"
                                    className="hover:text-orange-500 transition duration-300 text-sm"
                                >
                                    Order Now
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex flex-col items-center md:items-start">
                        <h6 className="text-white text-lg font-semibold mb-3">Follow Us</h6>
                        <div className="flex gap-4">
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full hover:bg-gray-800 transition duration-300"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full hover:bg-gray-800 transition duration-300"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full hover:bg-gray-800 transition duration-300"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full hover:bg-gray-800 transition duration-300"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 py-4 text-center">
                <p className="text-xs lg:text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} HALAL HAVEN Restaurant. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
