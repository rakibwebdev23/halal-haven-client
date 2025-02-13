import React from 'react';
import { Link } from 'react-router-dom';

const MenuCover = ({ title, description, order, imgBack }) => {
    return (
        <div className="relative min-h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${imgBack})`
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative min-h-screen flex items-center justify-center px-4">
                <div className="lg:w-1/2 text-center">
                    <h1 className="text-orange-500 lg:text-5xl text-3xl font-bold mb-6">
                        {title}
                    </h1>
                    <p className="text-gray-200 mb-8">
                        {description}
                    </p>
                    <Link to="/order">
                        <button className="bg-orange-600 text-white px-10 py-3 rounded hover:bg-orange-700 transition-colors duration-300 font-semibold">
                            {order}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MenuCover;