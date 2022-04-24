import React, {useState, useEffect} from "react";
import AddNewTodo from "./addNewtodo";

function TodoList() {
    const [Todos, setTodos] = useState([
        {text: "Get Money", id: 1}, 
        {text: "Master Js", id: 2},
        {text: "Master PHP", id: 3}
    ]);

    const [Count, setCount] = useState(0);


     const addTodo = (text) => {
         setTodos([
             ...Todos,
             {text: text, id: Math.random()}
         ])
     }

     useEffect(() => {
        console.log("use effect", Todos) 
     }, [Todos]);

     useEffect(() => {
         console.log('use effect', Count)
     }, [Count]);

    return(
        <div>
            <ul>
               {Todos.map((todo) => {
                   return (
                       <li key={todo.id}>{todo.text}</li>
                   )
               })}
            </ul>
            <AddNewTodo addTodo={addTodo}/>
            <button onClick={() => setCount( Count + 1)}>Score: {Count}</button>
        </div>
    )
}

export default TodoList