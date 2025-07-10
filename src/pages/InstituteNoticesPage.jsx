// src/pages/InstituteNoticesPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const InstituteNoticesPage = () => {
  const location = useLocation();

  // Mock data for Institute Notices (from image_fa32f7.png and Screenshot 2025-07-10 210309.png)
  const instituteNotices = [
    {
      id: 1,
      title: "Academic Calendar for the Session 2025-26",
      postedBy: "Academic Planning Cell",
      content: "The finalised academic calendar for the 2025-26 session is now available. It includes commencement dates, internal assessments, semester-end exams, and vacation schedules. Students and faculty are advised to review the timeline carefully to avoid any conflicts.",
      attachment: true,
    },
    {
      id: 2,
      title: "Mid-Semester Examination Guidelines",
      postedBy: "Dr. Suresh Nair - Examination Branch",
      content: "The finalised academic calendar for the 2025-26 session is now available. It includes commencement dates, internal assessments, semester-end exams, and vacation schedules. Students and faculty are advised to review the timeline carefully to avoid any conflicts.",
      attachment: true,
    },
    {
      id: 3,
      title: "Final Year Project Proposal Submission",
      postedBy: "Prof. Rajiv Sinha - Department of CSE",
      content: "Final year students are required to submit their project proposals by August 10th, 2025. Proposals should follow the standard format and include a clear objective and methodology. Refer to the attachment for full instructions.",
      attachment: true,
    },
  ];

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
              {/* Notices Link - Active State: covers all /notices sub-routes */}
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
          <h1 className="text-2xl font-semibold text-gray-800">Institute Notices</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Dr. Sofia</span>
            <Link to="/profile" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:opacity-90 transition">
              DS
            </Link>
          </div>
        </header>

        {/* Page Content - Institute Notices Section */}
        <div className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto">
            {/* Search Bar and Add Notice Button */}
            <div className="flex justify-between items-center mb-6">
                <div className="relative w-full max-w-sm">
                    <input
                        type="text"
                        placeholder="Search notices"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                </div>
                <Link to="/notices/add" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
                    + Post Notice
                </Link>
            </div>

            {/* Link back to Your Notifications */}
            <div className="mb-6 text-left">
                <Link to="/notices" className="text-blue-600 hover:underline text-sm font-medium">
                    &larr; View Your Notifications
                </Link>
            </div>

            {/* Institute Notices List */}
            {instituteNotices.length > 0 ? (
              <div className="space-y-6">
                {instituteNotices.map(notice => (
                  <div key={notice.id} className="p-4 border border-gray-200 rounded-md bg-white hover:shadow-sm transition duration-150 ease-in-out">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{notice.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">Posted by: {notice.postedBy}. {notice.content}</p>
                    {notice.attachment && (
                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm hover:bg-gray-300 transition">
                            View Attachment
                        </button>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 mt-4">No institute notices found.</p>
            )}

            {/* Pagination */}
            <div className="flex justify-center items-center mt-8 space-x-2">
              <button className="px-3 py-1 border rounded-md hover:bg-gray-200 text-gray-700">&lt;</button>
              {[1, 2, 3].map(page => (
                <button key={page} className="px-3 py-1 border rounded-md bg-black text-white hover:bg-gray-800">
                  {page}
                </button>
              ))}
              <span className="text-gray-700">...</span>
              <button className="px-3 py-1 border rounded-md hover:bg-gray-200 text-gray-700">10</button>
              <button className="px-3 py-1 border rounded-md hover:bg-gray-200 text-gray-700">&gt;</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InstituteNoticesPage;