import { cookies } from 'next/headers';

function CookiesList() {
    const cookieStore = cookies();
    console.log("cookieStore:", cookieStore);
    const hasCookie = cookieStore.has('theme');
    console.log("hasCookie:", hasCookie);


    return (
        <div>
            <h1>Cookies List </h1>
            {cookieStore.getAll().map((cookie) => (
                <div key={cookie.name}>
                    <p>Name: {cookie.name}</p>
                    <p>Value: {cookie.value}</p>
                </div>
            ))}
            <div>Does it have cookie named theme : {hasCookie ? 'yes' : 'no'}</div>
        </div>
    );


}
export default function AdminPage() {
    return (<>
        <div>
            <h1>Admin (page.js)</h1>
            <a href="/admin/prompts">Manage Prompts</a>
        </div>
        <CookiesList />
    </>
    );
};

