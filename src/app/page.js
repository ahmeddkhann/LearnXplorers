"use client"

import React from 'react'
import { details } from './data'
import Link from 'next/link'
import Image from 'next/image'

const Page = () => {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen pt-12">
      <div className="flex justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-shadow duration-300 hover:shadow-2xl hover:shadow-gray-700">
            {details.title}
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2">
            {details.subtitle}
          </h2>

          <span className="inline-block transition-shadow duration-300 hover:shadow-2xl hover:shadow-gray-700">
            <Image
              src={details.Image}
              width={150}
              height={120}
              alt="learnXplorers Logo"
              className="rounded-2xl mt-10 lg:ml-0"
            />
          </span>

          <p className="text-xl mt-10 mb-2">
            {details.text}
          </p>
        </div>
      </div>

      <div className="text-center mt-6">
        <Link href="/login">
          <button className="px-4 py-2 mr-4 rounded-2xl bg-blue-200 text-gray-800 hover:bg-blue-300 transform transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg">
            Log In
          </button>
        </Link>

        <Link href="/signup">
          <button className="px-4 py-2 mr-4 rounded-2xl bg-gray-200 text-gray-800 hover:bg-gray-300 transform transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg">
            Sign Up
          </button>
        </Link>

        <Link href="/send-message">
          <button className="px-4 py-2 rounded-2xl bg-yellow-300 text-gray-800 hover:bg-yellow-400 transform transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg">
            Send Feedback
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Page
