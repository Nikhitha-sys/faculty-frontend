import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import DocumentsPage from './pages/DocumentsPage';
import UploadDocumentPage from './pages/UploadDocumentPage';
import LeavesPage from './pages/LeavesPage';
import ProfilePage from './pages/ProfilePage';
import NotificationsPage from './pages/NotificationsPage'; // This is the main /notices route
import InstituteNoticesPage from './pages/InstituteNoticesPage'; // For /notices/institute
import AddNoticePage from './pages/AddNoticePage'; // For /notices/add
import HelpAndSupportPage from './pages/HelpAndSupportPage';
import SettingsPage from './pages/SettingsPage';

const LoginPageWrapper = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login successful! Navigating to profile page...");
    navigate('/profile');
  };

  return <LoginPage onLoginSuccess={handleLogin} />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPageWrapper />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/documents/upload" element={<UploadDocumentPage />} />
        <Route path="/leaves" element={<LeavesPage />} />
        <Route path="/notices" element={<NotificationsPage />} /> {/* Main Notifications page */}
        <Route path="/notices/institute" element={<InstituteNoticesPage />} /> {/* Institute Notices page */}
        <Route path="/notices/add" element={<AddNoticePage />} /> {/* Add New Notice page */}
        <Route path="/help-and-support" element={<HelpAndSupportPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;