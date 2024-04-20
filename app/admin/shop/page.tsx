import Link from "next/link";

function ShopHomePage() {
    return (
        <div>ShopHomePage

            <div>
                <Link href="/admin/shop/0?firstname=femida&lastname=hasina">Shop 0</Link>
            </div>
            <div>
                <Link href="/admin/shop/1">Shop 1</Link>
            </div>
            <div>
                <Link href="/admin/shop/2">Shop 2</Link>
            </div>
        </div>
    )
}

export default ShopHomePage;