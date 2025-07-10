// src/pages/NotificationsPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NotificationsPage = () => {
  const location = useLocation();

  // State for filters and sorting
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Most Recent');

  // Example Notifications data (from Screenshot 2025-07-10 200637.png)
  const notifications = [
    { id: 1, type: "message", title: "Message: Project Collaboration", detail: "New message from Sarah Chen", time: "Today, 10:30 AM", read: false },
    { id: 2, type: "forum", title: "Forum Discussing New Frameworks", detail: "New post in the 'Software Engineering' forum", time: "Yesterday", read: false },
    { id: 3, type: "announcement", title: "Announcement: Upcoming Alumni Event", detail: "Announcement from the Alumni Association", time: "2 days ago", read: false },
    { id: 4, type: "document", title: "Document: Request Status Changed", detail: "Update on your document request", time: "1 week ago", read: true },
    { id: 5, type: "message", title: "Reminder: Thesis Submission", detail: "Final reminder for thesis submission deadline", time: "2 weeks ago", read: true },
  ];

  // Filtered and Sorted Notifications (simple logic for demonstration)
  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'Unread') return !notification.read;
    if (filter === 'Read') return notification.read;
    return true; // 'All'
  }).sort((a, b) => {
    // Basic sorting - for a real app, parse dates properly
    if (sortBy === 'Most Recent') {
        // This sorting is highly simplified. In a real app, use Date objects for accurate comparison.
        return 0;
    }
    return 0;
  });

  // Function to get icon based on notification type
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'message': return '✉️';
      case 'forum': return '💬';
      case 'announcement': return '📢';
      case 'document': return '📄';
      default: return '🔔';
    }
  };

  const handleMarkAllAsRead = () => {
    console.log("Mark all notifications as read");
    alert("All notifications marked as read! (Simulated)");
  };

  const handleClearAllNotifications = () => {
    console.log("Clear all notifications");
    alert("All notifications cleared! (Simulated)");
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
          <h1 className="text-2xl font-semibold text-gray-800">Notifications</h1> {/* Header for notifications */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Dr. Sofia</span>
            <Link to="/profile" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:opacity-90 transition">
              DS
            </Link>
          </div>
        </header>

        {/* Page Content - Notifications Section */}
        <div className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Notifications</h2>
            <p className="text-gray-600 mb-6">Your central hub for all updates and messages. Stay informed about new documents, forum discussions, and alumni network activities.</p>

            {/* Filters */}
            <div className="mb-6">
              <h3 className="text-md font-medium text-gray-800 mb-2">Filters</h3>
              <div className="flex space-x-3">
                {['All', 'Unread', 'Read'].map(f => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${filter === f ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort By */}
            <div className="mb-6">
              <h3 className="text-md font-medium text-gray-800 mb-2">Sort By</h3>
              <div className="flex space-x-3">
                {['Most Recent', 'Oldest'].map(s => (
                  <button
                    key={s}
                    onClick={() => setSortBy(s)}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${sortBy === s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Link to Institute Notices */}
            <div className="mb-6 text-right">
                <Link to="/notices/institute" className="text-blue-600 hover:underline text-sm font-medium">
                    View Institute Notices &rarr;
                </Link>
            </div>

            {/* Notifications List */}
            {filteredNotifications.length > 0 ? (
              <div className="space-y-4">
                {filteredNotifications.map(notification => (
                  <div key={notification.id} className={`flex items-center p-4 border border-gray-200 rounded-md ${!notification.read ? 'bg-blue-50 bg-opacity-70' : 'bg-white'} hover:shadow-sm transition duration-150 ease-in-out`}>
                    <div className="flex-shrink-0 mr-4 text-2xl">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-md font-medium text-gray-900">{notification.title}</h3>
                      <p className="text-sm text-gray-600">{notification.detail}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                    <div className="flex-shrink-0 text-gray-500">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 mt-4">No notifications found.</p>
            )}

            {/* Action Buttons and Pagination */}
            <div className="flex justify-between items-center mt-8">
              <div className="flex space-x-4">
                <button
                  onClick={handleMarkAllAsRead}
                  className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition text-sm"
                >
                  Mark All as Read
                </button>
                <button
                  onClick={handleClearAllNotifications}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition text-sm"
                >
                  Clear All Notifications
                </button>
              </div>
              <div className="flex items-center space-x-2">
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
        </div>
      </main>
    </div>
  );
};

export default NotificationsPage;