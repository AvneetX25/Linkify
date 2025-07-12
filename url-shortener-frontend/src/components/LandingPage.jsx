import React from 'react'
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../contextApi/ContextApi";
import { Link } from 'react-router-dom';

import { FiLink } from 'react-icons/fi';

const LandingPage = () => {
    const navigate = useNavigate();
  const { token } = useStoreContext();
  console.log("TOKEN FROM LANDING PAGE: " + token);

  return (
    <div>
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex flex-col items-center justify-center text-center px-4">
  
  <div className="flex items-center mb-4">
    <div className="bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full flex items-center space-x-2">
     
        <FiLink className="text-blue-600 text-2xl" /> 
       <span>Linkify</span>
    </div>
  </div>

 
  <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
    Simplify URL shortening for
    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"> efficient sharing</span>
  </h1>

  
  <p className="mt-6 text-lg text-gray-600 max-w-xl">
    Easily generate, manage, and track your shortened links. Get powerful analytics and insights to optimize your link sharing strategy.
  </p>

  
  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl">
    <Link to="/register">
   <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:opacity-90 transition-all">
     Get Started
    </button>
    </Link>
  </div>

 
  <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
    <div className="flex items-center space-x-2">
      <span className="text-green-500">📈</span>
      <span>Real-time Analytics</span>
    </div>
    <div className="flex items-center space-x-2">
      <span className="text-blue-500">🌐</span>
      <span>Custom Domains</span>
    </div>
    <div className="flex items-center space-x-2">
      <span className="text-purple-500">📦</span>
      <span>Bulk Operations</span>
    </div>
  </div>
</div>
<section className="py-20 bg-white text-center px-4">
  <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Everything you need to manage your links</h2>
  <p className="text-gray-600 max-w-2xl mx-auto mb-12">
    Powerful features designed to help you create, manage, and optimize your shortened URLs efficiently.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
   
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-left hover:shadow-md transition">
      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md flex items-center justify-center text-white mb-4">
        🔗
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart URL Shortening</h3>
      <p className="text-gray-600 text-sm">
        Create short, memorable links instantly with our advanced algorithm that ensures optimal performance.
      </p>
    </div>

    

    <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-left hover:shadow-md transition">
      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md flex items-center justify-center text-white mb-4">
        🛡️
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Security</h3>
      <p className="text-gray-600 text-sm">
        Advanced security features including link expiration, password protection, and spam detection.
      </p>
    </div>

    <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-left hover:shadow-md transition">
      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md flex items-center justify-center text-white mb-4">
        ⚡
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
      <p className="text-gray-600 text-sm">
        Experience blazing-fast redirects with our global CDN and optimized infrastructure.
      </p>
    </div>

  
  </div>
</section>


<div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 text-center px-4">
  <div className="max-w-3xl mx-auto">
    
    <div className="flex justify-center items-center space-x-2 mb-4 text-yellow-300 text-sm">
      <span>⭐️⭐️⭐️⭐️⭐️</span>
  
    </div>

    
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Ready to optimize your link sharing?</h2>
    <p className="text-lg text-white/90 mb-8">
      Join thousands of users who trust Linkify for their URL shortening needs. <br />
      Start creating smarter links today.
    </p>

  </div>
</div>
    </div>
  )
}

export default LandingPage
