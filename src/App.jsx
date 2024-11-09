// import { MainFunction } from "./components/component";
// import { Toggle } from "./components/miniProject";
// import { Counter } from './functional counter/counterMain.jsx'
// import { TodoApp } from './Todo App/todo.jsx'

import { useRef } from "react"

// import { RegistrationForm } from "./registration form/registration form.jsx"
// import { PracticeUseEffect } from "./useEffect/practice.jsx"
// import { PokemonProject } from "./Pokemon project/pokemon.jsx"

import "./App.css"
import { useId } from "react"

export const App = () =>{
  let id = useId()
  let id1 = useId()
  let id2 = useId()
    
    return(
        <>
        <form>
            <input type="text" id={id + "userName"} />
            <input type="text" id={id1 + "userName"} />
            <input type="text" id={id2 + "userName"} />
        </form>
        </>
    )
}





{/* <PokemonProject /> */}
{/* <PracticeUseEffect /> */}
{/* <h1 className="text-3xl font-bold underline">Name of the series</h1>
<div className="section">
<MainFunction />
</div>
<h2 className="text-3xl font-bold underline">End of series</h2>

<Toggle /> */}
{/* <TodoApp /> */}
{/* <Counter/> */}