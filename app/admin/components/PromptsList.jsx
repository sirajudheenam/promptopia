"use client";
import { useEffect, useState } from "react";

const Prompt = ({ prompt }) => {
    return (
        <div>
            <h4>{prompt._id}</h4>
            <h4>{prompt.prompt}</h4>
            <h4>{prompt.tag}</h4>
        </div>
    );
};

const PromptsList = () => {
    const [prompts, setPrompts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/prompt");
                if (!response.ok) {
                    throw new Error("Failed to fetch prompts");
                }
                const data = await response.json();
                console.log("data:", data);
                setPrompts(data);
            } catch (error) {
                console.log("Error fetching prompts:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Prompts</h1>
            {
                prompts && prompts.map((prompt, index) => (
                    // Added key prop for list items
                    <Prompt key={index} prompt={prompt} />
                ))
            }
        </div>
    );
};

export default PromptsList;