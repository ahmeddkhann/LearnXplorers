"use client"

import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { loginText } from '../data'

const LogInPage = () => {
    const [formData, setFormData] = useState({ username: '', password: '', email: '' })
    const router = useRouter()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('/api/signin', formData)
    
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
            const errorMessage = error.response?.data?.message || 'Login failed'
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
                <h1 className="text-3xl font-bold text-center mb-4">{loginText.title}</h1>
                <p className="text-center mb-6 text-gray-400">{loginText.text}</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Log In
                    </button>
                </form>

                <div className="flex justify-between items-center mt-4 text-sm">
                    <Link href="/signup">
                        <p className="text-blue-400 hover:underline">Create an account</p>
                    </Link>
                    <Link href="/">
                        <p className="text-blue-400 hover:underline">Want to go back?</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LogInPage
