import Link from 'next/link'
import { useRouter } from 'next/router'

import Auth from '../../components/auth'
import Categories from '../../components/categories'

export default function CategoriesShow() {
    const router = useRouter()

    return (
        <Auth>
            <h1>Notes</h1>

            <ul className="nav nav-tabs">
                <Categories />

                <li className="nav-item">
                    <Link href="/categories/new" className={`nav-link ${(router.pathname === "/categories/new" ? "active" : "")}`}>+</Link>
                </li>
            </ul>
        </Auth>
    )
}