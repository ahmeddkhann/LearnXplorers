"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { details } from "../data";

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex">
      {/* Sidebar (showed conditionally on small screens) */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 p-4 z-30 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 lg:relative lg:block`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">LearnXplorers</h2>
          <span>
            <Image
              src={details.Image}
              width={30}
              height={30}
              alt="LearnXplorers Logo"
              className="rounded-lg lg:ml-2"
            />
          </span>
        </div>

        <p className="text-xl ml-3 text-green-400">Our Courses</p>
        <nav className="space-y-4">
          <Link href="/dashboard/chemistry">
            <p className="block px-4 py-2 rounded-md hover:bg-gray-700">
              Chemistry
            </p>
          </Link>
          <Link href="/dashboard/physics">
            <p className="block px-4 py-2 rounded-md hover:bg-gray-700">
              Physics
            </p>
          </Link>
          <Link href="/dashboard/biology">
            <p className="block px-4 py-2 rounded-md hover:bg-gray-700">
              Biology
            </p>
          </Link>
          <Link href="/dashboard/english">
            <p className="block px-4 py-2 rounded-md hover:bg-gray-700">
              English
            </p>
          </Link>
          <Link href="/dashboard/computer-science">
            <p className="block px-4 py-2 rounded-md hover:bg-gray-700">
              Computer Science
            </p>
          </Link>
          <Link href="/dashboard/maths">
            <p className="block px-4 py-2 rounded-md hover:bg-gray-700">
              Mathematics
            </p>
          </Link>
        </nav>
      </aside>

      {/* Overlay for sidebar on small screens */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-8 ml-0 lg:ml-64">
        {/* Top Bar */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Welcome to LearnXplorers Academy</h1>
          {/* Toggle Button for Sidebar */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden bg-gray-800 text-white px-3 py-1 rounded-md"
          >
            {sidebarOpen ? "Close" : "Courses"}
          </button>
        </header>

        {/* Dashboard Content */}
        
      </main>
    </div>
  );
};

export default DashboardPage;
