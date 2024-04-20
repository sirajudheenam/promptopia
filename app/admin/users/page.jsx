// pages/users.js
"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

function User({ user }) {

    return (
        <li key={user?._id} className="flex items-center justify-between p-4 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg">
            <div>
                <p className="text-lg font-semibold text-gray-800">Email: {user?.email}</p>
                <p className="text-sm text-gray-600">Username: {user?.username}</p>
            </div>
            {user?.image && (
                <div className="flex-shrink-0 ml-4">
                    <img src={user.image} alt="User Image" width={16} height={16} className="w-16 h-16 rounded-full" />
                </div>
            )}
        </li>
    );
}

const UsersPage = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/users');
                const data = await response.json();
                // console.log("data:", data);
                setUserList(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    useEffect(() => { userList && console.log("userList: ", userList); }, [userList]);

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">User List</h1>
                <ul className="space-y-4">
                    {userList && userList.length > 0 ? (userList?.map((user) => (
                        <User user={user} key={user._id} />
                    ))) : (<div>Users are not loaded </div>)}
                </ul>
            </div>
        </div>
    );
};

export default UsersPage;
