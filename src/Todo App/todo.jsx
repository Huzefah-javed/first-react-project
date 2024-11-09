import "./todo.css"
import { Form } from "./form";
import { TodoList } from "./TodoList";
import { useState } from "react";
import { DateTime } from "./DateAndTime";

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2134731362274430"
     crossorigin="anonymous"></script>
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
