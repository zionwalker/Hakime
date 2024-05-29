import React, { useState, useEffect } from 'react';

const Setting = () => {
    const [isNightMode, setIsNightMode] = useState(() => {
        const savedMode = localStorage.getItem('nightMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isNightMode);
        localStorage.setItem('nightMode', JSON.stringify(isNightMode));
    }, [isNightMode]);

    const handleNightModeToggle = () => {
        setIsNightMode(!isNightMode);
    };

    const handleChangePassword = () => {
        if (newPassword === confirmPassword) {
            setMessage('Password changed successfully');
        } else {
            setMessage('Passwords do not match');
        }
    };

    return (
        <div className="p-5 bg-gray-100 dark:bg-gray-800 min-h-screen text-gray-900 dark:text-gray-100">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            
            <div className="mb-6">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={isNightMode}
                        onChange={handleNightModeToggle}
                        className="mr-2"
                    />
                    Night Mode
                </label>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-4">Change Password</h3>
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-1/3 p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Confirm New Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-1/3 p-2 border border-gray-300 rounded"
                    />
                </div>
                <button
                    onClick={handleChangePassword}
                    className="w-1/3 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                >
                    Change Password
                </button>
                {message && <div className="mt-4 text-sm text-red-500">{message}</div>}
            </div>
        </div>
    );
};

export default Setting;
