import { useState } from "react"
import "./counter.css"

export const Counter = () => {
    const [count, setCount] = useState(0);
    const[userInput, setUserInput] = useState(0)
    

   const handleOnChange = (e) => {
    setUserInput(Number(e.target.value))
   }

   const handleIncrement = () => {
    if (count >= 0 && count < 100) {
        if(userInput > 0){ setCount(count + userInput) }
        else{ setCount(count + 1)}
    }
   }

   const handleDecrement = () => {
    if (count > 0 && count <= 100) {
        if(userInput > 0){ setCount(count - userInput) }
        else{ setCount( count - 1) }
}
   }

   const handleReset = () => {
    setCount(0)
   }

   const handleClearInput = () => {
    setUserInput(0)
   }
    
    return(
        <div className="main">
            <h1 className="heading">UseState Challenge</h1>
            <p>Count: <span className="count">{count}</span></p>
            <div className="input-area">
            <input type="number" name="inputNumber" id="input"  min="0"
            max="99" step="1" value={userInput} onChange={(e=>handleOnChange(e))} />
            <button onClick={handleClearInput}>clear Input</button>
            </div>
            <div className="buttons">
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}