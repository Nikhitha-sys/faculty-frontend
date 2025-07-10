import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SettingsPage = () => {
  const location = useLocation();

  // State for password fields
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  // State for notification preferences
  const [notificationPreferences, setNotificationPreferences] = useState({
    documentUploads: true, // Example default
    leaveRequestApprovalsRejections: true, // Example default
    newInstituteNotices: false, // Example default
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotificationPreferences(prev => ({ ...prev, [name]: checked }));
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmNewPassword) {
      alert("New password and confirm new password do not match!");
      return;
    }
    console.log("Updating password:", passwords);
    alert("Password update simulated!");
    // In a real app, send this to backend
    setPasswords({ currentPassword: '', newPassword: '', confirmNewPassword: '' }); // Clear fields
  };

  const handleSaveNotificationChanges = (e) => {
    e.preventDefault();
    console.log("Saving notification preferences:", notificationPreferences);
    alert("Notification preferences saved! (Simulated)");
    // In a real app, send this to backend
  };

  const handleLogout = () => {
    console.log("User logged out (Simulated)");
    alert("Logging out...");
    // In a real app, clear authentication tokens and redirect to login
    // For now, we'll just go back to the login page
    window.location.href = '/'; // Redirects to the login page
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
            {/* Settings Link - Active State */}
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
          <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Dr. Sofia</span>
            <Link to="/profile" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:opacity-90 transition">
              DS
            </Link>
          </div>
        </header>

        {/* Page Content - Settings */}
        <div className="flex-1 overflow-x-hidden overflow-y-auto p-6 flex justify-center items-start">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Account Security</h2>

            {/* Password Fields */}
            <form onSubmit={handleUpdatePassword} className="space-y-5 mb-8">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                <div className="relative">
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    value={passwords.currentPassword}
                    onChange={handlePasswordChange}
                    placeholder="Enter current password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 pr-10"
                    required
                  />
                  <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    <svg className="h-5 w-5 text-gray-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                </div>
                <Link to="#" className="text-blue-600 text-sm mt-1 inline-block hover:underline">Forgot Password?</Link>
              </div>

              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <div className="relative">
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={passwords.newPassword}
                    onChange={handlePasswordChange}
                    placeholder="Enter new password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 pr-10"
                    required
                  />
                  <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    <svg className="h-5 w-5 text-gray-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                <div className="relative">
                  <input
                    type="password"
                    id="confirmNewPassword"
                    name="confirmNewPassword"
                    value={passwords.confirmNewPassword}
                    onChange={handlePasswordChange}
                    placeholder="Confirm new password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 pr-10"
                    required
                  />
                  <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    <svg className="h-5 w-5 text-gray-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                </div>
                <p className="text-gray-500 text-xs mt-2">Leave fields empty if you don't want to change your password.</p>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
                >
                  Update password
                </button>
              </div>
            </form>

            <h2 className="text-xl font-semibold text-gray-800 mb-6">Notification Preferences</h2>

            {/* Notification Checkboxes */}
            <form onSubmit={handleSaveNotificationChanges} className="space-y-4">
              <div className="flex items-center">
                <input
                  id="documentUploads"
                  name="documentUploads"
                  type="checkbox"
                  checked={notificationPreferences.documentUploads}
                  onChange={handleNotificationChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="documentUploads" className="ml-3 text-sm font-medium text-gray-700">Document Uploads</label>
              </div>
              <div className="flex items-center">
                <input
                  id="leaveRequestApprovalsRejections"
                  name="leaveRequestApprovalsRejections"
                  type="checkbox"
                  checked={notificationPreferences.leaveRequestApprovalsRejections}
                  onChange={handleNotificationChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="leaveRequestApprovalsRejections" className="ml-3 text-sm font-medium text-gray-700">Leave Request Approvals/Rejections</label>
              </div>
              <div className="flex items-center">
                <input
                  id="newInstituteNotices"
                  name="newInstituteNotices"
                  type="checkbox"
                  checked={notificationPreferences.newInstituteNotices}
                  onChange={handleNotificationChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="newInstituteNotices" className="ml-3 text-sm font-medium text-gray-700">New Institute Notices</label>
              </div>
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
                >
                  Save Changes
                </button>
              </div>
            </form>

            {/* Logout Button */}
            <div className="flex justify-end mt-10">
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;