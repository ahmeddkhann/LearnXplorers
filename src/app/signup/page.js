"use client"

import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signUpText } from '../data'

const SignUpPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', username: '', password: '', gender: '', phone: '' })
    const router = useRouter()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('/api/signup', formData)
    
            if (response.data.success) {
                toast.success(response.data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                })
                
                setTimeout(() => {
                    router.push('/dashboard')
                }, 500) // half-second delay
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'SignUp Failed'
            toast.error(errorMessage, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
            })
        }
    }
    
    return (
        <div className="bg-gray-900 text-gray-300 min-h-screen flex items-center justify-center p-4">
            <ToastContainer />
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-4">{signUpText.title}</h1> {/* Dynamic title */}
                <p className="text-center mb-6 text-gray-400">{signUpText.text}</p> {/* Dynamic text */}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-400 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Name..."
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-400 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Email..."
                        />
                    </div>
                    <div>
                        <label htmlFor="username" className="block text-gray-400 mb-1">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Username..."
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-400 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Password..."
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-gray-400 mb-1">Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-gray-400 mb-1">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder=" phone number"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="flex justify-center mt-4 text-sm">
                    <p className="text-gray-400">Already have an account? </p>
                    <Link href="/login">
                        <p className="text-blue-400 hover:underline ml-1">Log in</p>
                    </Link>
                    
                </div>
                
            </div>
        </div>
    )
}

export default SignUpPage
