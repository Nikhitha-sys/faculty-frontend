import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProfilePage = () => {
  const location = useLocation();

  // State for user profile data, matching the fields in Screenshot 2025-07-10 195749.png
  const [userProfile, setUserProfile] = useState({
    yourName: "Dr. Sofia", // Corresponds to "Your Name"
    emailAddress: "dr.sofia@idrs.edu", // Corresponds to "Email Address"
    facultyId: "FAC001", // Corresponds to "Faculty ID"
    mobile: "+91 98765 43210", // Corresponds to "Mobile"
    dateOfBirth: "1985-05-20", // Corresponds to "Date of Birth"
    profilePic: "/default-avatar.png" // Placeholder for profile picture
  });

  // State for editable fields
  const [editedProfile, setEditedProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // When editing starts, populate editedProfile with current userProfile data
    if (isEditing) {
      setEditedProfile(userProfile);
    }
  }, [isEditing, userProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // In a real application, you would send editedProfile to your backend API
    console.log("Saving profile:", editedProfile);
    setUserProfile(editedProfile); // Update main profile state after saving
    setIsEditing(false);
    alert("Profile updated successfully! (Simulated)");
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedProfile({}); // Clear edited state
  };

  // Function to simulate image upload
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (upload) => {
        setEditedProfile(prev => ({ ...prev, profilePic: upload.target.result }));
      };
      reader.readAsDataURL(file);
    }
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
          <h1 className="text-2xl font-semibold text-gray-800">Profile</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Dr. Sofia</span>
            <Link to="/profile" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:opacity-90 transition">
              DS
            </Link>
          </div>
        </header>

        {/* Page Content - Profile Section */}
        <div className="flex-1 overflow-x-hidden overflow-y-auto p-6 flex justify-center items-start">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Manage Profile</h2>

            <div className="flex flex-col items-center mb-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center border-4 border-blue-500">
                <img
                  src={isEditing && editedProfile.profilePic ? editedProfile.profilePic : userProfile.profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {isEditing && (
                  <label htmlFor="profilePicUpload" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white cursor-pointer opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-2xl">+</span>
                    <input
                      type="file"
                      id="profilePicUpload"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                )}
              </div>
              <p className="text-lg font-semibold text-gray-800 mt-4">Dr. Sofia</p>
              <p className="text-sm text-gray-600">Faculty ID: FAC001</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6">
              <div className="col-span-full">
                <label htmlFor="yourName" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  id="yourName"
                  name="yourName"
                  value={isEditing ? editedProfile.yourName : userProfile.yourName}
                  onChange={handleChange}
                  readOnly={!isEditing}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none ${isEditing ? 'border-gray-300 focus:ring-blue-400 focus:border-blue-400' : 'border-gray-200 bg-gray-50'}`}
                />
              </div>

              <div>
                <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={isEditing ? editedProfile.emailAddress : userProfile.emailAddress}
                  onChange={handleChange}
                  readOnly={!isEditing}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none ${isEditing ? 'border-gray-300 focus:ring-blue-400 focus:border-blue-400' : 'border-gray-200 bg-gray-50'}`}
                />
              </div>

              <div>
                <label htmlFor="facultyId" className="block text-sm font-medium text-gray-700 mb-1">Faculty ID</label>
                <input
                  type="text"
                  id="facultyId"
                  name="facultyId"
                  value={isEditing ? editedProfile.facultyId : userProfile.facultyId}
                  onChange={handleChange}
                  readOnly={!isEditing}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none ${isEditing ? 'border-gray-300 focus:ring-blue-400 focus:border-blue-400' : 'border-gray-200 bg-gray-50'}`}
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={isEditing ? editedProfile.mobile : userProfile.mobile}
                  onChange={handleChange}
                  readOnly={!isEditing}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none ${isEditing ? 'border-gray-300 focus:ring-blue-400 focus:border-blue-400' : 'border-gray-200 bg-gray-50'}`}
                />
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={isEditing ? editedProfile.dateOfBirth : userProfile.dateOfBirth}
                  onChange={handleChange}
                  readOnly={!isEditing}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none ${isEditing ? 'border-gray-300 focus:ring-blue-400 focus:border-blue-400' : 'border-gray-200 bg-gray-50'}`}
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              {isEditing ? (
                <>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
                  >
                    Save Changes
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;