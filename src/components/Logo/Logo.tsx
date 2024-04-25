import { Link } from "react-router-dom"
import './Logo.css'


export const Logo = () => {
    return (
        <Link to={'/'} className="logo">
            <h1>Mi Blog</h1>
        </Link>
    )
}
