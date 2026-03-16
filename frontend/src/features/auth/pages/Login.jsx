import React, { useState } from 'react'
import {useAuth} from "../hook/useAuth.js";
import {useNavigate} from "react-router"
import { useSelector } from 'react-redux';


export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {handleLogin} = useAuth();
  const Navigate = useNavigate();
  const user = useSelector((state)=>state.auth.user)
  const loading = useSelector((state)=>state.auth.loading)



  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log('Email:', email, 'Password:', password)

   const payload = {
    email,
    password
   }
  await handleLogin(payload);
  Navigate('/')

  


    // Add your login logic here
  }

  if(!loading && user){
     Navigate('/')
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-sm px-6">
        {/* Logo/Title */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-white mb-2">Login</h1>
          <div className="w-12 h-1 bg-[#F27127]"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Email Input */}
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full bg-transparent border-b-2 border-gray-700 text-white placeholder-gray-600 pb-3 focus:outline-none focus:border-[#F27127] transition duration-300 text-sm"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-transparent border-b-2 border-gray-700 text-white placeholder-gray-600 pb-3 focus:outline-none focus:border-[#F27127] transition duration-300 text-sm"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-5 py-3 bg-[#F27127] text-white font-semibold hover:bg-orange-500 transition duration-300 rounded-md"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 text-sm mt-8">
          Don't have an account?{' '}
          <a href="/register" className="text-[#F27127] hover:text-orange-500 transition">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}
