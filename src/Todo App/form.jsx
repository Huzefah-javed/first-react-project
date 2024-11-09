import { useState } from "react"

export const Form = ({setListTodo ,ListTodo}) =>{

    const [todo, setTodo] = useState("")
   

    const handleInputChange = (e) => {
       setTodo(e.target.value)
    }
 
    const handleSubmitForm = (value) => {
        value.preventDefault();
        if (todo !== "" && !ListTodo.some(item => item.content === todo)) {
            setListTodo((prevVal)=> [...prevVal, {content:todo.trim(), checked:false}])
        }

        setTodo("")
    }

    return(
        <form className="form" onSubmit={(value)=>handleSubmitForm(value)}>
            <input type="text" 
            className="input-field" value={todo} onChange={(e)=>handleInputChange(e)} />
            <button type="submit" className="add-todoBtn">Add Todo</button>
        </form>
    )
}