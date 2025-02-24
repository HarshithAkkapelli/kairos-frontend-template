import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage"; // Create this page
import SearchPage from "./pages/SearchPage"; // Create this page
import NotificationsPage from "./pages/NotificationsPage"; // Create this page
import AuthProviderComponent from "./components/AuthProvider";
import Layout from "./Layout";

function App() {
  return (
    <AuthProviderComponent>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/home" element={<Layout />}>
                <Route index element={<HomePage />} />
              </Route>
              <Route path="/search" element={<Layout />}>
                <Route index element={<SearchPage />} />
              </Route>
              <Route path="/notifications" element={<Layout />}>
                <Route index element={<NotificationsPage />} />
              </Route>
              <Route path="/profile" element={<Layout />}>
                <Route index element={<ProfilePage />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </AuthProviderComponent>
  );
}

export default App;
