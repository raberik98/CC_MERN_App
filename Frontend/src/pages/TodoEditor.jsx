import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { fetchTodo } from "../services/todo.service"

export default function TodoEditor() {

    const [selectedTodo, setSelectedTodo] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        fetchTodo(id).then(data => setSelectedTodo(data)).catch(err => alert(err))
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
    }
    
    return <main>
        <h1>Editor</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="inputTitle">Title:</label>
            <input type="text" id="inputTitle" defaultValue={selectedTodo ? selectedTodo.title : ""}></input>

            <label htmlFor="inputTitle">Title:</label>
            <textarea id="inputTitle" defaultValue={selectedTodo ? selectedTodo.description : ""}></textarea>

            <button type="submit">Submit form</button>
        </form>
    </main>
}