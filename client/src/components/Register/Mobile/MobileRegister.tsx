import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const BASE_URL = 'http://localhost:5000/api'; // Update the base URL to your API endpoint

const MobileRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate(); // Create navigate function for redirecting

  const handleSignUp = async () => {
    try {
      const response = await fetch(`http://localhost:8000/auth/register`, { // Update the URL to your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role: selectedRole, // Send selected role as a single string
        }),
      });
      const data = await response.json();
      if (response.ok) {
        // Handle successful registration (e.g., show success message, redirect)
        console.log('Registration successful:', data);
        navigate('/');
        // Redirect or perform any other action needed
      } else {
        // Handle registration error
        console.error('Registration failed:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSignIn = () => {
    // Redirect to /signIn
    navigate('/signIn');
  };

  return (
    <div className="w-[490px] mb-16 mx-auto max-w-full flex flex-col items-center justify-start box-border  overflow-hidden rounded-[30px]  relative leading-normal tracking-normal bg-gradient-to-b from-[#1456ad] via-[#2661af] to-[#81b7ff]">
      <div className="bg-white rounded-full w-96 h-24 flex items-center justify-center mb-8 mt-[97px]">
        <img
          className="object-cover w-80 h-24 z-10"
          loading="lazy"
          alt="Logo"
          src="/logo1.png"
        />
      </div>

      <div className="w-full flex justify-center mb-[-2px]">
        <img
          className="object-cover h-auto"
          alt="Cloud Image"
          src="/mobilecloud.png"
        />
      </div>

      <div className="w-full bg-white flex flex-col items-center">
        <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg flex flex-col items-start mt-8">
          <label className="text-2xl mb-3 font-semibold">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border-b-2 mb-11 w-full border-gray-500 focus:border-blue-900 outline-none"
          />

          <label className="text-2xl mb-3 font-semibold">Email Id</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border-b-2 mb-11 w-full border-gray-500 focus:border-blue-900 outline-none"
          />

          <label className="text-2xl mb-3 font-semibold">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border-b-2 mb-11 w-full border-gray-500 focus:border-blue-900 outline-none"
          />

          <label className="text-2xl mb-7 font-semibold">Register as</label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="p-2 border-b-2 mb-24 w-full border-blue-500 focus:border-blue-900 outline-none"
            aria-label="Register as"
          >
            <option value="" disabled>-- Select role --</option>
            <option value="Contributor">Contributor</option>
            <option value="Care Institution">Care Institution</option>
            <option value="Care Provider">Care Provider</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Admin">Admin</option>
          </select>

          <button
            onClick={handleSignUp} // Handle Sign Up button click
            className="text-black text-lg mb-9 font-medium bg-white border-2 border-black rounded-full px-6 py-2 w-full hover:bg-gray-100"
          >
            Sign Up
          </button>
          <button
            onClick={handleSignIn} // Handle Sign In button click
            className="text-white text-lg mb-7 font-medium bg-gradient-to-t from-[#378dfd] to-[#1e78ee] rounded-full px-6 py-2 w-full hover:from-[#1e78ee] hover:to-[#378dfd]"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileRegister;
