// 

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import Login from './components/Login';
import { useAuth } from './auth';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/1">Blog Post 1</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/blog/:postId" element={<BlogPost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

function ProtectedRoute({ children }) {
  const auth = useAuth();
  return auth.isAuthenticated ? children : <Navigate to="/login" />;
}

export default App;

["/blog/:id"]
