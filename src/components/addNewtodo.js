import React, {useState} from "react";


function AddNewTodo({addTodo}) {
    const [Todos, setTodos] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        addTodo(Todos);
        setTodos("");
    };

    return(
        <form onSubmit={onFormSubmit}>
            <label htmlFor="todo">Todo</label>
            <input type="text" id="todo" value={Todos} onChange={(e) => setTodos(e.target.value)} />
            <input type="submit" />
        </form>
    )
}

export default AddNewTodo;