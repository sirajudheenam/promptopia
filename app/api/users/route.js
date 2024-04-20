import User from "@models/user";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        const users = await User.find(); // Fetch all users from the database
        return new Response(JSON.stringify(users), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch all users", { status: 500 });
    }
}; 