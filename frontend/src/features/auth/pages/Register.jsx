import React, { useState } from 'react'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    console.log('Name:', name, 'Email:', email, 'Password:', password)
    // Add your register logic here
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-sm px-6">
        {/* Logo/Title */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-white mb-2">Register</h1>
          <div className="w-12 h-1 bg-[#F27127]"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Input */}
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="User name"
              className="w-full bg-transparent border-b-2 border-gray-700 text-white placeholder-gray-600 pb-3 focus:outline-none focus:border-[#F27127] transition duration-300 text-sm"
              required
            />
          </div>

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
              type="password"
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
            Create Account
          </button>
        </form>

        {/* Sign In Link */}
        <p className="text-center text-gray-600 text-sm mt-8">
          Already have an account?{' '}
          <a href="/login" className="text-[#F27127] hover:text-orange-500 transition">
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}

export default Register