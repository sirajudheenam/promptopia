"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState, Suspense } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();

            setMyPosts(data);
        };
        if (session?.user.id) fetchPosts();
    }, [session?.user.id]);

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`);
    };

    const handleDelete = async (post) => {
        const hasConfirmed = confirm(
            "Are you sure you want to delete this prompt?"
        );

        if (hasConfirmed) {
            try {
                await fetch(`/api/prompt/${post._id.toString()}`, {
                    method: "DELETE",
                });

                const filteredPosts = myPosts.filter((item) => item._id !== post._id);

                setMyPosts(filteredPosts);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const UserDetails = () => {
        session && console.log(session);
        return (
            <>
                <div>
                    <h1>Name: {session?.user?.name}</h1>
                    <h1>ID: {session?.id}</h1>
                    <h1>Email: {session?.user?.email}</h1>
                    <h1>Image: {session?.user?.image}</h1>
                    <h1>Expires: {session?.expires}</h1>
                </div>
            </>
        );
    };
    return (
        <>
            <Profile
                name='My'
                desc={`Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination`}
                data={myPosts}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
            <UserDetails />
        </>
    );
};

// export default MyProfile;

export default function MyProfileSuspense() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MyProfile />
        </Suspense>
    );
}