"use client"

import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { feedbackText } from '../data'
const SendMessagePage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('/api/send-message', formData)

            if (response.data.success) {
                toast.success(response.data.message, {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                })
                setFormData({ name: '', email: '', message: '' }) // Clear the form on success
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Message sending failed'
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
                <h1 className="text-3xl font-bold text-center mb-4">{feedbackText.title}</h1>
                <p className="text-center mb-6 text-gray-400">{feedbackText.text}</p>
                
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
                        <label htmlFor="message" className="block text-gray-400 mb-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Message..."
                            rows="4"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Send Feedback
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SendMessagePage
