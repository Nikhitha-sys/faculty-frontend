import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LeavesPage = () => {
  const location = useLocation();
  const [leaveType, setLeaveType] = useState('');
  const [reason, setReason] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Mock data for leave tracker
  const leaveRequests = [
    { id: 1, type: "Sick Leave", reason: "Flu symptoms", startDate: "2024-07-15", endDate: "2024-07-16", status: "Approved" },
    { id: 2, type: "Vacation", reason: "Family trip", startDate: "2024-08-01", endDate: "2024-08-15", status: "Pending" },
  ];

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    console.log({ leaveType, reason, startDate, endDate });
    alert("Leave request submitted! (Simulated)");
    // Here you would typically send this data to your backend
    // You might also want to clear the form fields and update the leave tracker
  };

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
          <h1 className="text-2xl font-semibold text-gray-800">Leave Management</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Dr. Sofia</span>
            <Link to="/profile" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:opacity-90 transition">
              DS
            </Link>
          </div>
        </header>

        {/* Page Content - Leave Management */}
        <div className="flex-1 overflow-x-hidden overflow-y-auto p-6 flex justify-center items-start">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Leave Request</h2>
            <form onSubmit={handleSubmitRequest} className="space-y-5 mb-8">
              <div>
                <label htmlFor="leaveType" className="block text-sm font-medium text-gray-700 mb-1">Leave Type</label>
                <select
                  id="leaveType"
                  value={leaveType}
                  onChange={(e) => setLeaveType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                  required
                >
                  <option value="">Select Leave Type</option>
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Earned Leave">Earned Leave</option>
                  <option value="Vacation">Vacation</option>
                  <option value="Maternity Leave">Maternity Leave</option>
                </select>
              </div>
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">Reason for Leave</label>
                <input
                  type="text"
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Enter reason for leave"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                  <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
                >
                  Submit Request
                </button>
              </div>
            </form>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Leave Tracker</h2>
            {/* Filters for Leave Tracker (as per screenshot) */}
            <div className="flex space-x-4 mb-4">
              <select className="px-3 py-2 border border-gray-300 rounded-md">
                <option>All Leave Types</option>
                <option>Sick Leave</option>
                <option>Vacation</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-md">
                <option>All Statuses</option>
                <option>Approved</option>
                <option>Pending</option>
                <option>Rejected</option>
              </select>
            </div>

            {/* Leave Requests Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-md">
                <thead>
                  <tr className="bg-gray-100 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                    <th className="py-3 px-4 border-b">Leave Type</th>
                    <th className="py-3 px-4 border-b">Reason</th>
                    <th className="py-3 px-4 border-b">Start Date</th>
                    <th className="py-3 px-4 border-b">End Date</th>
                    <th className="py-3 px-4 border-b">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {leaveRequests.map((request) => (
                    <tr key={request.id} className="border-b border-gray-200 text-gray-800">
                      <td className="py-3 px-4">{request.type}</td>
                      <td className="py-3 px-4">{request.reason}</td>
                      <td className="py-3 px-4">{request.startDate}</td>
                      <td className="py-3 px-4">{request.endDate}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          request.status === 'Approved' ? 'bg-green-100 text-green-800' :
                          request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {request.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LeavesPage;