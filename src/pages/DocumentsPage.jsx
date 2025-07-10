import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const DocumentsPage = () => {
  const location = useLocation();

  // Mock data for documents table
  const documents = [
    { sNo: 1, name: "Research Paper on AI Ethics", type: "Research Papers", date: "2023-11-15", remarks: "Updated" },
    { sNo: 2, name: "Course Syllabus - SP2024", type: "Course Materials", date: "2023-10-23", remarks: "Approved" },
    { sNo: 3, name: "Annual Report 2023", type: "Reports", date: "2023-09-05", remarks: "Approved" },
  ];

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      {/* Sidebar - Black Theme */}
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
          <h1 className="text-2xl font-semibold text-gray-800">Documents</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Dr. Sofia</span>
            <Link to="/profile" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:opacity-90 transition">
              DS
            </Link>
          </div>
        </header>

        {/* Page Content - Documents List */}
        <div className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Documents</h2>
              <Link to="/documents/upload" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
                + Upload Document
              </Link>
            </div>

            {/* Filter and Search Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="documentType" className="block text-sm font-medium text-gray-700 mb-1">Document Type</label>
                <select
                  id="documentType"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                >
                  <option value="">Select Type</option>
                  <option value="Research Papers">Research Papers</option>
                  <option value="Course Materials">Course Materials</option>
                  <option value="Reports">Reports</option>
                </select>
              </div>
              <div>
                <label htmlFor="documentName" className="block text-sm font-medium text-gray-700 mb-1">Document Name</label>
                <input
                  type="text"
                  id="documentName"
                  placeholder="Enter Document Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                />
              </div>
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fromDate" className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
                  <input
                    type="date"
                    id="fromDate"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="toDate" className="block text-sm font-medium text-gray-700 mb-1">To Date</label>
                  <input
                    type="date"
                    id="toDate"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                  />
                </div>
              </div>
              <div className="md:col-span-2 flex justify-start space-x-3">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">Search</button>
                <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400 transition">Print All</button>
              </div>
            </div>

            {/* Documents Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-md">
                <thead>
                  <tr className="bg-gray-100 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                    <th className="py-3 px-4 border-b">S.No</th>
                    <th className="py-3 px-4 border-b">Document Name</th>
                    <th className="py-3 px-4 border-b">Date</th>
                    <th className="py-3 px-4 border-b">Document Type</th>
                    <th className="py-3 px-4 border-b">Remarks</th>
                    <th className="py-3 px-4 border-b">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc) => (
                    <tr key={doc.sNo} className="border-b border-gray-200 text-gray-800">
                      <td className="py-3 px-4">{doc.sNo}</td>
                      <td className="py-3 px-4">{doc.name}</td>
                      <td className="py-3 px-4">{doc.date}</td>
                      <td className="py-3 px-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                          {doc.type}
                        </span>
                      </td>
                      <td className="py-3 px-4">{doc.remarks}</td>
                      <td className="py-3 px-4">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View Download</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Placeholder */}
            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
              <span>Showing 1 to 3 of 10 entries</span>
              <div className="flex space-x-1">
                <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200">Previous</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md bg-blue-600 text-white">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200">2</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DocumentsPage;