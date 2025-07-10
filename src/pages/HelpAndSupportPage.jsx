import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HelpAndSupportPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Knowledge Base/FAQs'); // State for active tab
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "How do I reset a user's password?",
      answer: "To reset a user's password, navigate to the 'Settings' page, then select 'User Management'. Find the user in the list, click on the '...' options menu, and choose 'Reset Password'. You will be prompted to enter and confirm the new password.",
      isOpen: false
    },
    {
      id: 2,
      question: "What are the different user roles and permissions?",
      answer: "The system supports several user roles: Admin, Faculty, and Student. Each role has specific permissions. Admins have full access, Faculty can manage documents and leaves, and Students have limited viewing capabilities. Detailed permissions can be found in the 'Settings > Roles & Permissions' section.",
      isOpen: false
    },
    {
      id: 3,
      question: "How can I export user data?",
      answer: "User data can be exported from the 'Settings > User Management' page. There you will find an 'Export Data' button, which allows you to download user information in various formats like CSV or Excel. Ensure you have the necessary administrative privileges to perform this action.",
      isOpen: false
    },
    // Add more FAQs as needed
  ]);

  const toggleFAQ = (id) => {
    setFaqs(faqs.map(faq =>
      faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
    ));
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
            {/* Help and Support Link - Active State */}
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
          <h1 className="text-2xl font-semibold text-gray-800">Support Center</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Dr. Sofia</span>
            <Link to="/profile" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:opacity-90 transition">
              DS
            </Link>
          </div>
        </header>

        {/* Page Content - Support Center */}
        <div className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-5xl mx-auto">
            <h2 className="text-xl font-semibold mb-6">Support Center</h2>

            {/* Quick Access Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Quick Access</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Knowledge Base Card */}
                <div className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 mb-1">Explore our comprehensive knowledge base</p>
                    <p className="text-sm text-gray-600 mb-3">Find answers to common questions and troubleshooting tips.</p>
                    <button className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-900 transition text-sm">
                      Go to Knowledge Base
                    </button>
                  </div>
                  {/* Placeholder image for Knowledge Base */}
                  <img src="https://placehold.co/96x96/E0E0E0/616161?text=KB" alt="Knowledge Base" className="w-24 h-24 object-contain ml-4" />
                </div>

                {/* Contact Support Card */}
                <div className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 mb-1">Need help? Contact our support team</p>
                    <p className="text-sm text-gray-600 mb-3">Submit a support ticket for personalized assistance.</p>
                    <button className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-900 transition text-sm">
                      Contact Support
                    </button>
                  </div>
                  {/* Placeholder image for Support */}
                  <img src="https://placehold.co/96x96/E0E0E0/616161?text=Support" alt="Support" className="w-24 h-24 object-contain ml-4" />
                </div>
              </div>
            </div>

            {/* Tabbed Interface */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {['Knowledge Base/FAQs', 'Contact Support', 'My Tickets', 'Announcements'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content - Knowledge Base/FAQs (Default active tab) */}
            {activeTab === 'Knowledge Base/FAQs' && (
              <div>
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search for articles or FAQs"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map(faq => (
                    <div key={faq.id} className="border border-gray-200 rounded-md">
                      <button
                        className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-800 hover:bg-gray-50 focus:outline-none"
                        onClick={() => toggleFAQ(faq.id)}
                      >
                        <span>{faq.question}</span>
                        <span>
                          {faq.isOpen ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                          )}
                        </span>
                      </button>
                      {faq.isOpen && (
                        <div className="p-4 pt-0 text-gray-600 border-t border-gray-200">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Placeholder for other tabs */}
            {activeTab === 'Contact Support' && (
              <div className="p-4 text-gray-600">
                <p>Contact Support form will go here.</p>
              </div>
            )}
            {activeTab === 'My Tickets' && (
              <div className="p-4 text-gray-600">
                <p>Your support tickets will be listed here.</p>
              </div>
            )}
            {activeTab === 'Announcements' && (
              <div className="p-4 text-gray-600">
                <p>Internal announcements related to support will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HelpAndSupportPage;