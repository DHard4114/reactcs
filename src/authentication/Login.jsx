import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
        handleSignIn();
        }
    };

    const handleSignIn = () => {
        setIsLoggedIn(true);
        setTimeout(() => {
        setIsLoggedIn(false);
        }, 1000);
    };

    useEffect(() => {
        if(isLoggedIn) {
            alert("Berhasil Login!");
        }
    }), [isLoggedIn];

    return (
        <div className="w-full flex items-center justify-center min-h-screen bg-[#0A0A0A] p-4 font-lato">
        <div className="max-w-md w-full bg-white rounded-sm p-5 border border-gray-200">
            <h2 className="text-xl font-mono text-gray-800 text-center mb-3 tracking-wide">Login</h2>


            <div className="space-y-3">
            <div>
                <label htmlFor="email" className="block text-sm font-mono text-gray-700">Email</label>
                <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                className="mt-1 block w-full rounded-sm border-gray-300 focus:border-gray-500 focus:ring-gray-400 text-gray-800 p-2"
                required
                />
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-mono text-gray-700">Password</label>
                <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                className="mt-1 block w-full rounded-sm border-gray-300 focus:border-gray-500 focus:ring-gray-400 text-gray-800 p-2"
                required
                />
            </div>

            <button
                onClick={handleSignIn}
                disabled={isLoggedIn}
                className="w-full bg-[#141414] text-white font-mono py-2 rounded-sm hover:bg-gray-900 transition-all"
            >
                {isLoggedIn ? "Loading..." : "Login"}
            </button>

            <p className="text-center text-sm">
                Belum punya akun? <Link to="/authentication/signup" className="text-blue-500">Daftar</Link>
            </p>
            <p className="text-center text-sm">
                <Link to="/authentication/repass" className="text-blue-500">Forgot Password?</Link>
            </p>
            </div>
        </div>
        </div>
    );
};

export default Login;
