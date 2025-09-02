import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SignUp, SignIn, Dashboard } from './pages'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  // listen for storage changes from other tabs
  useEffect(() => {
    const onStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('token'));
    };
    window.addEventListener('storage', onStorageChange);
    return () => window.removeEventListener('storage', onStorageChange);
  }, []);

  return (
    <Routes>
      <Route path="/" element={
        isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/signin" />
      } />
      <Route path="/signin" element={
        isLoggedIn ? <Navigate to="/dashboard" /> : <SignIn onLogin={() => setIsLoggedIn(true)} />
      } />
      <Route path="/signup" element={
        isLoggedIn ? <Navigate to="/dashboard" /> : <SignUp />
      } />
      <Route path="/dashboard" element={
        isLoggedIn ? <Dashboard onLogout={() => setIsLoggedIn(false)} /> : <Navigate to="/signin" />
      } />
    </Routes>
  );
}

export default App;
