import img from "../../../assets/logo/logos.png";

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-gray-300 p-10 mih-h-screen">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-16">
                    <div className="flex items-center gap-4">
                        <img className="w-16 h-16" src={img} alt="Logo" />
                        <div>
                            <h2 className="text-xl font-bold text-white">HALAL HAVEN Restaurant</h2>
                            <p className="text-sm">Providing reliable services since 1992</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full lg:w-auto">
                        <nav>
                            <h6 className="text-white text-lg font-semibold mb-3">Services</h6>
                            <ul>
                                <li>
                                    <a
                                        href="#"
                                        className="block text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        Branding
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        Design
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        Marketing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        Advertisement
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <nav>
                            <h6 className="text-white text-lg font-semibold mb-3">Company</h6>
                            <ul>
                                <li>
                                    <a
                                        href="#"
                                        className="block text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        About us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        Jobs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        Press kit
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <nav>
                            <h6 className="text-white text-lg font-semibold mb-3">Legal</h6>
                            <ul>
                                <li>
                                    <a
                                        href="#"
                                        className="block text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        Terms of use
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        Privacy policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        Cookie policy
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <nav>
                            <h6 className="text-white text-lg font-semibold mb-3">Quick Links</h6>
                            <ul>
                                <li>
                                    <a
                                        href="#"
                                        className="block text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        Menu
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        Reservations
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>
            <footer className="bg-gray-800 text-gray-400 py-4 text-center">
                <p className="text-sm">
                    Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
                    <span className="text-white font-semibold">HALAL HAVEN Restaurant</span>
                </p>
            </footer>
        </div>
    );
};

export default Footer;
