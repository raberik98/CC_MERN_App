import { Link } from "react-router-dom"

export default function Navbar() {
    return <header>
        <h1>Todo List</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
        </nav>
    </header>
}