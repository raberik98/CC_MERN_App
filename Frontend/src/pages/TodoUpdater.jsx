import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import { fetchTodo } from "../services/todo.service"
import { editTodo } from "../services/todo.service"

import TodoEditor from "../components/TodoEditor"

export default function TodoUpdater() {

    const [selectedTodo, setSelectedTodo] = useState(null)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetchTodo(id).then(data => setSelectedTodo(data)).catch(err => alert(err))
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()

        editTodo({ title: e.target.title.value, description: e.target.description.value }, navigate, id)
    }
    
    return <TodoEditor title={"editor"} onSubmitHandler={handleSubmit} selectedTodo={selectedTodo}/>
}