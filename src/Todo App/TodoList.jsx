import { FaRegCircleCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = ({ListTodo , setListTodo }) =>{


    const handleClearAll = () => {
      setListTodo([])
    }

    const handleCheckBtn = (item) => {
        setListTodo((prv)=> prv.map((ListItems)=> 
            ListItems.content === item.content ? {...ListItems, checked: !ListItems.checked} : ListItems
        ))
    }


  const handleDelBtn =(clickedItem)=> {
    setListTodo((prev) => prev.filter((ListItems)=> clickedItem.content !== ListItems.content))


    }

    return(
        <ul>
            {ListTodo.map((item , index)=>{
                return(
                <li key={index} className="list">
                <div className={`input-li ${item.checked ? "checked" : "unChecked"}`}>{item.content}</div>
                <div onClick={()=> handleCheckBtn(item)} className="check-Btn"><FaRegCircleCheck /></div>
                <div onClick={()=>handleDelBtn(item)} className="del-Btn"><MdDeleteForever /></div>
                </li>                                                                                                                                                                                        
                )
            })}
        <div className="clearAll" onClick={handleClearAll}>clear All</div>
        </ul>
    )
}
