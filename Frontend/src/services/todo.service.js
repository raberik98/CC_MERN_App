export async function fetchTodos(){
    return await fetch("/api/v1/todos").then(resp => resp.json()).catch((err) => alert(err.message))
}

export async function fetchTodo(id) {
    return await fetch(`/api/v1/todo/${id}`).then(resp => resp.json()).catch((err) => alert(err.message))
}

export async function postNewTodo(newTodo, callback) {
    console.log(newTodo);
    return await fetch("/api/v1/todo", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    }).then(resp => resp.json().then(data => {alert(data.message); callback("/")})).catch(err => alert(err.message))
}


export async function editTodo(newTodo, callback, id) {
    console.log(newTodo);
    return await fetch(`/api/v1/todo/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    }).then(() => callback("/")).catch(err => alert(err.message))
}



export async function deleteTodo(id) {
    return await fetch(`/api/v1/todo/${id}`, {
        method: "DELETE",
    })
}
