export async function fetchTodos(){
    return await fetch("/api/v1/todos").then(resp => resp.json())
}

export async function fetchTodo(id) {
    return await fetch(`/api/v1/todo/${id}`).then(resp => resp.json())
}


