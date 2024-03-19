import { postNewTodo } from "../services/todo.service"
import TodoEditor from "../components/TodoEditor"
import { useNavigate } from "react-router-dom"

export default function TodoCreator() {
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        postNewTodo({title: e.target.title.value, description: e.target.description.value}, navigate)
    }
    
    return <TodoEditor title={"Create new todo!"} onSubmitHandler={handleSubmit}/>
}