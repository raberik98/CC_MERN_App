import { useState, useEffect} from "react"
import { fetchTodos, deleteTodo } from "../services/todo.service"

import TodoItem from "../components/TodoItem"

export default function TodoList() {

    const [todos, setTodos] = useState(null)

    useEffect(() => {
        fetchTodos().then(data => setTodos(data)).catch((err) => alert(err.message))
    }, [])
    //deppendency array

    function filterDeletedTodo(id) {
        setTodos(prevState => prevState.filter(next => next._id != id))
    }

    async function handleDelete(id) {
        deleteTodo(id).then(() => filterDeletedTodo(id)).catch(err => alert(err.message))
    }

    
    return <main>
        <h1>Hello this is the main page!</h1>

        {
            todos ? todos.map(nextTodo => <TodoItem key={nextTodo._id} {...nextTodo} handleDelete={handleDelete} />) : <h3>Loading...</h3>
        }
    </main>
}