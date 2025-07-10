import React from 'react';

// Add onLoginSuccess prop to the component
const LoginPage = ({ onLoginSuccess }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // In a real application, you would send credentials to your backend here.
    // If authentication is successful, then call onLoginSuccess.
    console.log("Attempting login...");
    if (onLoginSuccess) {
      onLoginSuccess(); // Simulate successful login and navigate
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col justify-center items-center">
      {/* Top black bar */}
      <div className="bg-black text-white w-full py-3 px-6">
        <h1 className="text-lg font-semibold">IDRS Faculty Portal</h1>
      </div>

      {/* Login Box */}
      <div className="bg-white w-full max-w-md mt-10 p-8 rounded-md shadow-md text-center">
        <h2 className="text-xl font-semibold mb-6">
          Welcome to IDRS Faculty Portal
        </h2>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}> {/* Add onSubmit */}
          <input
            type="email"
            placeholder="Enter institutional email"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="bg-black text-white py-2 rounded-full hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4">
          Your data is protected by our security measures.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-6 text-xs text-blue-800">
        Version 1.2 | © 2025 Institute Data Retrieval System
      </div>
    </div>
  );
};

export default LoginPage;