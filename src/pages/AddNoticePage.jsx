// src/pages/AddNoticePage.jsx
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AddNoticePage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // For redirecting back to notices
  const [formData, setFormData] = useState({
    noticeTitle: '',
    noticeContent: '',
    noticeVisibleTo: 'Admin Only', // Default value from screenshot
    file: null,
  });
  const [fileName, setFileName] = useState('No file chosen');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files[0] }));
      setFileName(e.target.files[0].name);
    } else {
      setFormData(prev => ({ ...prev, file: null }));
      setFileName('No file chosen');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Add New Notice Form Submitted:", formData);
    alert("Notice added successfully! (Simulated)");
    // Here you would typically send formData to your backend API
    navigate('/notices/institute'); // Redirect back to Institute Notices after submission
  };

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      {/* Sidebar - Consistent Black Theme */}
      <aside className="w-64 bg-black text-white shadow-md flex flex-col justify-between">
        <div>
          <div className="flex items-center px-6 py-4 border-b border-gray-700">
            <img src="/logo.svg" alt="IDRS Logo" className="h-8 w-8 mr-3" />
            <span className="text-xl font-semibold text-white">IDRS</span>
          </div>
          <nav className="mt-4">
            <ul>
              <li className={`px-6 py-3 cursor-pointer hover:bg-gray-800 ${location.pathname === '/dashboard' ? 'text-blue-400 font-medium' : 'text-gray-300'}`}>
                <Link to="/dashboard" className="flex items-center">
                  <span className="mr-3">📊</span> Dashboard
                </Link>
              </li>
              <li className={`px-6 py-3 cursor-pointer hover:bg-gray-800 ${location.pathname.startsWith('/documents') ? 'text-blue-400 font-medium' : 'text-gray-300'}`}>
                <Link to="/documents" className="flex items-center">
                  <span className="mr-3">📄</span> Documents
                </Link>
              </li>
              <li className={`px-6 py-3 cursor-pointer hover:bg-gray-800 ${location.pathname.startsWith('/leaves') ? 'text-blue-400 font-medium' : 'text-gray-300'}`}>
                <Link to="/leaves" className="flex items-center">
                  <span className="mr-3">📝</span> Leaves
                </Link>
              </li>
              {/* Notices Link - Active State: covers all sub-paths under notices */}
              <li className={`px-6 py-3 cursor-pointer hover:bg-gray-800 ${location.pathname.startsWith('/notices') ? 'text-blue-400 font-medium' : 'text-gray-300'}`}>
                <Link to="/notices" className="flex items-center">
                  <span className="mr-3">🔔</span> Notices
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mb-4">
          <ul>
            <li className={`px-6 py-3 cursor-pointer hover:bg-gray-800 ${location.pathname === '/help-and-support' ? 'text-blue-400 font-medium' : 'text-gray-300'}`}>
              <Link to="/help-and-support" className="flex items-center">
                <span className="mr-3">❓</span> Help and Support
              </Link>
            </li>
            <li className={`px-6 py-3 cursor-pointer hover:bg-gray-800 ${location.pathname === '/profile' ? 'text-blue-400 font-medium' : 'text-gray-300'}`}>
                <Link to="/profile" className="flex items-center">
                    <span className="mr-3">👤</span> Profile
                </Link>
            </li>
            <li className={`px-6 py-3 cursor-pointer hover:bg-gray-800 ${location.pathname === '/settings' ? 'text-blue-400 font-medium' : 'text-gray-300'}`}>
                <Link to="/settings" className="flex items-center">
                    <span className="mr-3">⚙️</span> Settings
                </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden bg-gray-200">
        {/* Top Navigation Bar (Header) - Consistent */}
        <header className="flex items-center justify-between bg-white shadow-sm p-4 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800">Add New Notice</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Dr. Sofia</span>
            <Link to="/profile" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:opacity-90 transition">
              DS
            </Link>
          </div>
        </header>

        {/* Page Content - Add New Notice Form */}
        <div className="flex-1 overflow-x-hidden overflow-y-auto p-6 flex justify-center items-start">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="noticeTitle" className="block text-sm font-medium text-gray-700 mb-1">Notice Title</label>
                <input
                  type="text"
                  id="noticeTitle"
                  name="noticeTitle"
                  value={formData.noticeTitle}
                  onChange={handleChange}
                  placeholder="Enter notice title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="noticeContent" className="block text-sm font-medium text-gray-700 mb-1">Notice Content</label>
                <textarea
                  id="noticeContent"
                  name="noticeContent"
                  value={formData.noticeContent}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Enter notice details here"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 resize-y"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="noticeVisibleTo" className="block text-sm font-medium text-gray-700 mb-1">Notice Visible To</label>
                <select
                  id="noticeVisibleTo"
                  name="noticeVisibleTo"
                  value={formData.noticeVisibleTo}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                >
                  <option value="Admin Only">Admin Only</option>
                  <option value="Faculty">Faculty</option>
                  <option value="All">All</option>
                </select>
              </div>

              <div>
                <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700 mb-1">Attach File (PDF/DOC)</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={fileName}
                    readOnly
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none"
                  />
                  <label className="bg-black text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-800 transition text-sm">
                    Choose File
                    <input type="file" id="fileUpload" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                  </label>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6">
                <Link to="/notices/institute" className="text-blue-600 hover:underline text-sm font-medium"> {/* Changed back link */}
                  &larr; Back to Institute Notices
                </Link>
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddNoticePage;