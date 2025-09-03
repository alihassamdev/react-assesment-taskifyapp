import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SignUp, SignIn } from './pages'
import { MainLayout } from './components/Dashboard/Layout/MainLayout/MainLayout';
import Index from './pages/Dashboard/Index/Index';
import VitalTask from './pages/Dashboard/VitalTask/VitalTask';
import MyTask from './pages/Dashboard/MyTask/MyTask';
import AccountInfo from './pages/Dashboard/Setting/AccountInfo/AccountInfo';
import ChangePassword from './pages/Dashboard/Setting/ChangePassword/ChangePassword';


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
        isLoggedIn ? <MainLayout onLogout={() => setIsLoggedIn(false)} /> : <Navigate to="/signin" />
      } >
        <Route index element={<Index />} />
        <Route path='vital-task' element={<VitalTask />} />
        <Route path='my-task' element={<MyTask />} />
        <Route path='setting' element={<AccountInfo />} />
        <Route path='change-password' element={<ChangePassword />} />
      </Route>
    </Routes>
  );
}

export default App;