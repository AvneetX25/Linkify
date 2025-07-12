import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full px-6 py-10 bg-black ~ text-gray-300">
      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-2xl font-bold text-white">Linkify</h1>
          <p>
            A product by{" "}
            <a
              href="https://www.linkedin.com/in/avneetkaur025"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Avneet Kaur
            </a>
          </p>
          <div className="flex space-x-4 text-xl text-blue-400">
           
            <a href="https://www.linkedin.com/in/avneetkaur025" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/AvneetX25" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
           
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <h2 className="text-white font-semibold text-lg">URL Shortener with Analytics</h2>
          <p className="mt-1 text-sm text-gray-400">
            Transforming long URLs into short links while providing valuable insights.
          </p>
          <p className="mt-1 text-sm text-gray-400">© 2025 Linkify. All rights reserved.</p>
        </div>
      </div>
    </footer>

   

      
    
  )
}

export default Footer
