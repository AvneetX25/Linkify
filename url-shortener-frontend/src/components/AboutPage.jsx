import React from 'react'

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600">About Us</h1>

      <section className="mb-8">
        <p className="text-lg">
          Welcome to <span className="font-semibold">Linkify</span>, your all-in-one solution for
          smarter, faster, and more secure link management.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-2">🔗 What We Do</h2>
        <ul className="list-disc list-inside space-y-1 text-lg">
          <li>Shorten long URLs into clean, customizable links</li>
          <li>Generate QR codes for instant offline access</li>
          <li>Track clicks and analytics (coming soon)</li>
          <li>Secure your links with expiry and access control</li>
          <li>Support for custom domains and branded URLs</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-2">💡 Why We Built This</h2>
        <p className="text-lg">
          The internet is cluttered. We wanted to build a simple yet powerful tool to declutter
          link sharing. Our mission is to make digital sharing seamless, elegant, and powerful for
          everyone.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-2">👥 Who We Are</h2>
        <p className="text-lg">
          We’re a small team of developers and creators passionate about building meaningful tools.
          This project is a result of that passion—to simplify and amplify online sharing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-2">🌍 Our Vision</h2>
        <p className="text-lg">
          To become the most trusted link management platform—free, open, and accessible to all.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-2">📬 Get in Touch</h2>
        <p className="text-lg">
          Have suggestions or just want to say hi? Reach out:
        </p>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li>Email: <a href="mailto:support@linkify.io" className="text-indigo-600 underline">support@linkify.io</a></li>
          <li>Twitter: <a href="https://twitter.com/linkifyapp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">@linkifyapp</a></li>
        </ul>
      </section>
    </div>
    
  )
}

export default AboutUs
