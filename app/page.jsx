import Feed from "@components/Feed";
import { Suspense } from "react";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { AuthRequiredError } from '@lib/exceptions';

const Home = () => {
    // const { data: session } = useSession();
    // if (!session) throw new AuthRequiredError();
    return (
        <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center'>
                Discover & Share
                <br className='max-md:hidden' />
                <span className='orange_gradient text-center'> AI-Powered Prompts</span>
            </h1>
            <p className='desc text-center'>
                Promptopia is an open-source AI prompting tool for modern world to
                discover, create and share creative prompts
            </p>
            <Feed />
        </section>
    );
};

export default Home;