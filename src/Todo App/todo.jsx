import "./todo.css"
import { Form } from "./form";
import { TodoList } from "./TodoList";
import { useState } from "react";
import { DateTime } from "./DateAndTime";


export const TodoApp = () => {
    const [ListTodo, setListTodo] = useState(JSON.parse(localStorage.getItem("TodoList"))||[])
    localStorage.setItem("TodoList", JSON.stringify(ListTodo))

        return(
        <div className="main">
            <header>
               <div className="heading">TodoApp</div>
               <DateTime /> 
            </header>
             <Form setListTodo={setListTodo} ListTodo={ListTodo}  />
             <TodoList ListTodo={ListTodo} setListTodo={setListTodo} />

        </div>
    )
}
