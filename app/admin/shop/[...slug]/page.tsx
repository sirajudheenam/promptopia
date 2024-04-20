import Link from "next/link"

export default function Page({
    params,
    searchParams,
}: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    return (<div>
        <h1>My Page</h1>
        <h1> Params Slug </h1>
        <p>Slug: {params.slug}</p>
        <h1>Search parameters:</h1>
        <ul>
            <li>First Name: {searchParams.firstname}</li>
            <li>Last Name: {searchParams.lastname}</li>
        </ul>
        <Link href="/admin/shop">Back to shop</Link>
    </div>)
}