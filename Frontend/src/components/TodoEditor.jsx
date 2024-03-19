
export default function TodoEditor({title, onSubmitHandler, selectedTodo=null }) {
    
    return <main>
        <h1>{title}</h1>
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="inputTitle">Title:</label>
            <input name="title" type="text" id="inputTitle" defaultValue={selectedTodo ? selectedTodo.title : ""}></input>

            <label htmlFor="inputTitle">Title:</label>
            <textarea name="description" id="inputTitle" defaultValue={selectedTodo ? selectedTodo.description : ""}></textarea>

            <button type="submit">Submit form</button>
        </form>
    </main>
}