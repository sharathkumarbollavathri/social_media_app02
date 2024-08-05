import './App.css';
import { Register } from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Login';
import { useState } from 'react';
import { Home } from './Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = () => {
  toast.success('🦄 Wow so easy!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: "Bounce",
    });
}
function App() {
  const [isLoggedin, setisLoggedin] = useState(false)

  const handleLogin = () => {
    setisLoggedin(true)
  }

  const handleLogout = () => {
    setisLoggedin(false)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login onLogin={handleLogin} />}></Route>
        <Route path="register" element={<Register />} />
        <Route path='home' element={<Home onLogout={handleLogout} />}></Route>
      </Routes>
      <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={true}
rtl={true}
pauseOnFocusLoss={false}
draggable
pauseOnHover={false}
theme="light"
transition="Bounce"
/>
    </BrowserRouter>
  );
}

export default App;
