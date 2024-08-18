import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Register from '../../Register/register';

const BASE_URL = 'http://localhost:5000/api';

const DesktopLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Create navigate function for redirecting
  const [selectedRole, setSelectedRole] = useState(''); // Manage role as a single string
  const [openLoginModal, setOpenLoginModal] = useState(false); 

  const handleOpenLoginModal = () => {
    setOpenLoginModal(true); // Open the login modal
  };

  const handleCloseLoginModal = () => {
    setOpenLoginModal(false); // Close the login modal
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:8000/auth/login`, { // Update the URL to your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        // Handle successful login (e.g., redirect, save token)
        console.log('Login successful:', data);
        navigate('/');
        // Redirect or perform any other action needed
      } else {
        // Handle login error
        console.error('Login failed:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleRegister = () => {
    // Redirect to /signUp
    navigate('/signUp');
  };

  return (
    <div className="flex justify-center items-center h-full m-16">
      <div className="shadow-lg rounded-3xl border border-red-800 overflow-hidden flex w-full">
        <div className="flex-[1.5] relative bg-gradient-to-b from-[#1456ad] via-[#2261b4] to-[#81b7ff] py-10 pr-14 pl-0">
          <div className="pl-0 pr-0 flex flex-col items-center justify-center z-20">
            <h1 className="mt-11 z-10 text-white font-bold mb-24 text-5xl">Welcome to</h1>
            <div className="bg-white rounded-full w-96 h-24 flex items-center justify-center">
              <img className="object-cover w-80 h-24 z-10" loading="lazy" alt="" src="/logo1.png" />
            </div>
            <p className="text-center inline-block p-20 text-white text-2xl z-10 mb-3 mt-8">
              More than a platform; it's a promise. A promise to connect hearts, share resources, and build a brighter future together.
            </p>
            <img className="w-96 h-0.5 object-fill mt-4 z-10" loading="lazy" alt="" src="/vector-11.svg" />
            <div className="inline-block w-[184px] z-10 text-stone-50 text-2xl mt-14">
              Join us today!
            </div>
          </div>
          <div className="absolute top-0 right-0 h-full">
            <img className="object-cover h-full" alt="" src="/cloud9.png" />
          </div>
        </div>
        <div className="flex-1 bg-white p-10 flex flex-col items-center justify-center">
          <h1 className="text-5xl mb-36 font-semibold text-black font-poppins whitespace-nowrap">Login</h1>
          <div className="flex flex-col items-start w-full max-w-md">
            <label className="text-2xl mb-7 font-semibold ">Email Id</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border-b-2 mb-24 w-full border-blue-500 focus:border-blue-900 outline-none"
            />
            <label className="text-2xl mb-7 font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border-b-2 mb-24 w-full border-blue-500 focus:border-blue-900 outline-none"
            />
          </div>
          <div className="flex justify-between gap-9 mt-4 w-full max-w-xs">
            <button
             onClick={handleOpenLoginModal}
              className="text-black text-lg font-medium bg-white border-2 border-black rounded-full px-6 py-2 w-full hover:bg-blue-400"
            >
              Sign Up
            </button>
            <button
              onClick={handleLogin}
              className="text-white text-lg font-medium bg-gradient-to-t from-[#378dfd] to-[#1e78ee] rounded-full px-6 py-2 w-full hover:from-[#1e78ee] hover:to-[#378dfd]"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <Modal
        open={openLoginModal}
        onClose={handleCloseLoginModal}
        aria-labelledby="modal-login-title"
        aria-describedby="modal-login-description"
        BackdropProps={{
          sx: {
            backdropFilter: 'blur(3px)',  // Blur background for dull effect
            backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent black
          },
        }}
      >
        <Box
          sx={{
            
            padding: 2,
          
          }}
        >
          <IconButton
            onClick={handleCloseLoginModal}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'red',  // Red color for the close icon
              fontSize: '2rem', 
            }}
          >
            <CloseIcon />
          </IconButton>
          <Register /> {/* Render the existing Login component */}
        </Box>
      </Modal>
    </div>
  );
};

export default DesktopLogin;