"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const User = ({ params }) => {
    const { data: session } = useSession();
    const { id } = params;

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch(`/api/users/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch user");
                }
                const data = await response.json();
                setUser(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user:", error);
                setLoading(false);
            }
        }
        fetchUser();
    }, [id]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200" >
            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                {loading ? (
                    <p className="text-lg font-semibold text-gray-800">Loading...</p>
                ) : (
                    <div className="flex items-center space-x-4">
                        {user?.image && (
                            <img
                                src={user?.image}
                                alt="User Image"
                                className="w-16 h-16 rounded-full"
                            />
                        )}
                        <div>
                            <p className="text-lg font-semibold text-gray-800">Email: {user?.email}</p>
                            <p className="text-sm text-gray-600">Username: {user?.username}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default User;
