
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
  const res = await axios.post(`${apiBaseUrl}/api/auth/login`, { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/'); // Redirect to landing page
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center" style={{ fontFamily: 'Gilroy, Inter, Segoe UI, Arial, sans-serif' }}>
      <h1 className="text-3xl font-bold mb-4">Login to CampusVault</h1>
      <form className="w-full max-w-xs bg-white p-8 rounded shadow" onSubmit={handleSubmit}>
        <input
          className="w-full mb-4 p-2 border rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full mb-4 p-2 border rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <div className="mb-2 text-red-600 text-sm">{error}</div>}
        <button className="w-full bg-gray-900 text-white py-2 rounded font-semibold" type="submit">Login</button>
      </form>
      <p className="mt-4 text-gray-600">Don't have an account? <a href="/signup" className="text-blue-600 font-semibold">Sign up</a></p>
    </div>
  );
};

export default Login;
