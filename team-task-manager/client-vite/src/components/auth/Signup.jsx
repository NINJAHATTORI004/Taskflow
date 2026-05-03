import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import { getErrorMessage } from '../../utils/errorHandler';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Member',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { name, email, password, role } = formData;

  const onChange = (e) => {
    setError('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await authService.signup({ name, email, password, role });
      navigate('/login');
    } catch (ex) {
      setError(getErrorMessage(ex));
      console.error(ex);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Join TaskFlow</h1>
          <p className="text-gray-600">Create an account to get started</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
            <p className="text-sm text-red-800 font-medium">{error}</p>
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <form onSubmit={onSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
                placeholder="Enter your full name"
                value={name}
                onChange={onChange}
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
                placeholder="Enter your email"
                value={email}
                onChange={onChange}
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
                placeholder="Create a strong password"
                value={password}
                onChange={onChange}
              />
            </div>

            {/* Role Select */}
            <div>
              <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                Account Type
              </label>
              <select
                name="role"
                value={role}
                onChange={onChange}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 text-gray-900 rounded-lg focus:outline-none focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
              >
                <option value="Member">Member (Can update tasks)</option>
                <option value="Admin">Admin (Full access)</option>
              </select>
              <p className="mt-2 text-xs text-gray-500">Admins can create projects and assign tasks. Members can update task status.</p>
            </div>


            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-teal-700 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating account...
                </span>
              ) : (
                'Create account'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Already have an account?</span>
            </div>
          </div>

          {/* Sign In Link */}
          <Link to="/login" className="w-full mt-6 inline-flex items-center justify-center py-3 px-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-all duration-200">
            Sign in instead
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
