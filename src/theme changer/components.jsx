import { createContext, use } from "react";
import { useState } from "react";
import "./component.css"

export const ThemeContext = createContext();


export const ProviderTheme = ({ children }) => {
    
    const [theme, setTheme] = useState("light");
    
    const handleClickButton = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    } 
    return(
        <ThemeContext.Provider value={{theme, handleClickButton}}>
        {children}
    </ThemeContext.Provider>
   )
}


export const Block = () => {
    let { theme, handleClickButton } = use(ThemeContext)

    return(
    <div
     className={` flex flex-col h-screen justify-center  items-center ${theme === "light"? "bg-white":"bg-slate-800"}`}>
        <h1
         className={`m-4 font-sans text-4xl ${theme === "light"? "text-black":"text-white"}`}>
            Light and dark Theme website
            </h1>
        <h3
         className={`m-4 font-sans text-3xl ${theme === "light"? "text-black":"text-white"}`}>
            switch the button to check
            </h3>
        <button
         on onClick={handleClickButton}
         className="m-2 h-24 w-40 rounded-2xl text-white bg-blue-800 hover:bg-blue-600">
            dark mode
            </button>
    </div>
 )
}