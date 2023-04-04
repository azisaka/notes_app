import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Categories() {
    const { data: session } = useSession()
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
       fetch('http://localhost:5000/categories', {
            mode: "cors",
            headers: { authorization: `Bearer ${session.access_token}` }
        })
        .then((response) => response.json())
        .then((data) => {
            setCategories(data)
        })
    }, [])
    
    return (
        <>
            {categories.map(item => (
                <NavItem name={item.name} id={item.id} key={`nav-item-${item.id}`} />
            ))}
        </>
    )
}

const NavItem = (props) => {
    const router = useRouter()
    const active = router.query.id == props.id

    if (active) {
        return (
            <>
                <li className="nav-item">
                    <Link href={`/categories/${props.id}`} className="nav-link active">{props.name}</Link>
                </li>
            </>
        )
    } else {
        return (
            <li className="nav-item">
                <Link href={`/categories/${props.id}`} className="nav-link">{props.name}</Link>
            </li>
        )
    }
}