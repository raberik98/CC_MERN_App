import { Link } from "react-router-dom";

export default function TodoItem({ title, description, prio, _id, handleDelete }) {
    return <div className={prio ? "todo-item-container golden" : "todo-item-container"}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button><Link to={`/update/${_id}`}>Edit</Link></button>
        <button onClick={() => handleDelete(_id)}>Delete</button>
    </div>
}