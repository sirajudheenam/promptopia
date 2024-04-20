import Link from 'next/link';

export default function NotFound() {
    return <div>
        <h1>Not found – 404! - Customized Error</h1>
        <div>
            <Link href="/">Go back to Home</Link>
        </div>
    </div>;
}