import React from 'react';

const Login = () => (
  <div className="min-h-screen bg-white flex flex-col items-center justify-center" style={{ fontFamily: 'Gilroy, Inter, Segoe UI, Arial, sans-serif' }}>
    <h1 className="text-3xl font-bold mb-4">Login to CampusVault</h1>
    {/* Login form will go here */}
    <form className="w-full max-w-xs bg-white p-8 rounded shadow">
      <input className="w-full mb-4 p-2 border rounded" type="email" placeholder="Email" required />
      <input className="w-full mb-4 p-2 border rounded" type="password" placeholder="Password" required />
      <button className="w-full bg-gray-900 text-white py-2 rounded font-semibold" type="submit">Login</button>
    </form>
    <p className="mt-4 text-gray-600">Don't have an account? <a href="/signup" className="text-blue-600 font-semibold">Sign up</a></p>
  </div>
);

export default Login;
