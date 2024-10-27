// src/pages/physicists.js
"use client";

import React, { useState } from 'react';
import { physicist } from '@/app/data';
import Link from 'next/link';

const Physicists = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-900 py-10 min-h-screen">
            {/* Navbar */}
            <div className="bg-blue-800 p-4 text-gray-300">
                <div className="flex items-center justify-end">
                    <button
                        className="text-gray-200 hover:text-gray-300 sm:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                </div>
                <div className={`sm:flex ${isOpen ? 'block' : 'hidden'} justify-end`}>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard/physics"}>
                        Home
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard/physics/books"}>
                        Books
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard/physics/physicists"}>
                        Physicists
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard"}>
                        Dashboard
                    </Link>
                </div>
            </div>

            {/* Page Title */}
            <div className="container mx-auto mt-8 p-4">
                <h1 className="text-4xl font-bold text-white text-center mb-6">Famous Physicists</h1>
            </div>

            {/* Physicist Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-0 sm:mx-4">
                {physicist.map((physicistItem) => (
                    <div key={physicistItem.id} className="bg-blue-200 shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 p-4">
                        <img
                            src={physicistItem.image}
                            alt={physicistItem.name}
                            className="w-full h-40 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{physicistItem.name}</h2>
                            <p className="text-gray-500">{physicistItem.span}</p>
                            <p className="text-gray-700 mt-2">{physicistItem.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Physicists;
