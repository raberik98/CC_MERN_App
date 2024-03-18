export default function TodoItem({ title, description, prio }) {
    return <div className={prio ? "todo-item-container golden" : "todo-item-container"}>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
}