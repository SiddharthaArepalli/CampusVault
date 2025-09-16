
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      await axios.post('/api/auth/signup', { name, email, password });
      setLoading(false);
      navigate('/login'); // Redirect to login page
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafd] flex flex-col justify-center items-center px-2" style={{ fontFamily: 'Gilroy, Inter, Segoe UI, Arial, sans-serif', background: '#fafafd' }}>
      <div className="w-full max-w-sm">
        <div className="mb-8">
          <h1 className="text-5xl font-semibold text-left text-[#23232b] leading-tight mb-2">Hi !<br/>Welcome</h1>
          <p className="text-base text-left text-[#888892] mb-6">Let's create an account</p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="border-b border-[#bdbdc7] bg-transparent outline-none py-2 px-1 text-base text-[#23232b] placeholder-[#888892]"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Full Name"
            className="border-b border-[#bdbdc7] bg-transparent outline-none py-2 px-1 text-base text-[#23232b] placeholder-[#888892]"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          {/* Username field removed for backend compatibility */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="border-b border-[#bdbdc7] bg-transparent outline-none py-2 px-1 w-full text-base text-[#23232b] placeholder-[#888892] pr-10"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button type="button" className="absolute right-1 top-1/2 -translate-y-1/2 text-[#888892]" tabIndex={-1} onClick={() => setShowPassword(v => !v)}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                {showPassword ? (
                  <path d="M1 1l22 22M17.94 17.94A10.94 10.94 0 0 1 12 19c-5 0-9.27-3.11-11-7 1.21-2.71 3.31-4.94 6-6.32M9.53 9.53A3 3 0 0 1 12 15a3 3 0 0 1-2.47-5.47" />
                ) : (
                  <>
                    <path d="M1 12C2.73 7.11 7 4 12 4c5 0 9.27 3.11 11 8-1.73 4.89-6 8-11 8-5 0-9.27-3.11-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </>
                )}
              </svg>
            </button>
            <div className="text-xs text-[#bdbdc7] mt-1">Must contain a number and least of 6 characters</div>
          </div>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              className="border-b border-[#bdbdc7] bg-transparent outline-none py-2 px-1 w-full text-base text-[#23232b] placeholder-[#888892] pr-10"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
            <button type="button" className="absolute right-1 top-1/2 -translate-y-1/2 text-[#888892]" tabIndex={-1} onClick={() => setShowConfirmPassword(v => !v)}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                {showConfirmPassword ? (
                  <path d="M1 1l22 22M17.94 17.94A10.94 10.94 0 0 1 12 19c-5 0-9.27-3.11-11-7 1.21-2.71 3.31-4.94 6-6.32M9.53 9.53A3 3 0 0 1 12 15a3 3 0 0 1-2.47-5.47" />
                ) : (
                  <>
                    <path d="M1 12C2.73 7.11 7 4 12 4c5 0 9.27 3.11 11 8-1.73 4.89-6 8-11 8-5 0-9.27-3.11-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </>
                )}
              </svg>
            </button>
            <div className="text-xs text-[#bdbdc7] mt-1">Must contain a number and least of 6 characters</div>
          </div>
          {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
          <button type="submit" className="mt-6 w-full bg-[#23232b] text-white py-3 rounded text-lg font-medium tracking-wide shadow-none hover:bg-[#23232b]/90 transition" disabled={loading}>{loading ? 'Signing Up...' : 'Sign Up'}</button>
        </form>
        <div className="mt-8 text-center text-[#888892] text-base">
          Have an account ?{' '}
          <a href="/login" className="text-[#23232b] font-medium hover:underline">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
