"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { details, courses } from "../data";

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex">
      {/* Sidebar (shown conditionally on small screens) */}
      <aside
        className={`fixed inset-y-0 left-0 w-60 bg-gray-800 p-4 z-30 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 lg:relative lg:block`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">LearnXplorers</h2>
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
        <nav className="space-y-3">
          {courses.map((course) => (
            <Link key={course.id} href={`/dashboard/${course.title.toLowerCase()}`}>
              <p className="block px-3 py-2 rounded-md hover:bg-gray-700">
                {course.title}
              </p>
            </Link>
          ))}

          <Link className="ml-3 hover:bg-gray-700 block px-3 py-2" href={"/feedback"}>
          Feedback?
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
      <main className="flex-1 p-6 lg:ml-60 flex flex-col items-start">
        {/* Top Bar */}
       <div>
       <header className="flex justify-between items-center mb-2 w-full">
          <h1 className="text-3xl font-bold">Welcome to LearnXplorers Academy</h1>
          {/* Toggle Button for Sidebar */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden bg-gray-800 text-white px-3 py-1 rounded-md"
          >
            {sidebarOpen ? "Close" : "Courses"}
          </button>
        </header> 

        <p className="mb-5 text-center">
            Here are the courses we offer!
        </p>
       </div>

        {/* Courses Section */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={course.image}
                width={400}
                height={150}
                alt={course.title}
                className="w-full h-32 object-cover" // Shorter height for the image
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-400 mb-3 text-sm">{course.description}</p>
                <Link href={`/dashboard/${course.title.toLowerCase()}`}>
                  <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                    {course.button}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
