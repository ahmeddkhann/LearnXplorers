// src/pages/chemists.js
import React from 'react';
import { chemist } from '@/app/data';
import Link from 'next/link';

const Chemists = () => {
    return (
        <div className="bg-orange-400 py-10 min-h-screen">
            {/* Navbar */}
            <div className="bg-blue-800 p-4 text-gray-300 text-right">
                <Link className="mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard/chemistry"}>
                    Home
                </Link>
                <Link className="mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard/chemistry/books"}>
                    Books
                </Link>
                <Link className="mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard/chemistry/chemists"}>
                    Chemists
                </Link>
            </div>

            {/* Page Title */}
            <div className="container mx-auto mt-8 p-4">
                <h1 className="text-4xl font-bold text-white text-center mb-6">Famous Chemists</h1>
            </div>

            {/* Chemist Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-4">
                {chemist.map((chemistItem) => (
                    <div key={chemistItem.id} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 p-4">
                        <img
                            src={chemistItem.image}
                            alt={chemistItem.name}
                            className="w-full h-40 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{chemistItem.name}</h2>
                            <p className="text-gray-500">{chemistItem.span}</p>
                            <p className="text-gray-700 mt-2">{chemistItem.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chemists;
