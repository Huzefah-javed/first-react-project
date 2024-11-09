import { useState } from "react";
import "./registrationForm.css"

export const RegistrationForm = () => {
    const [user, setUser] = useState({
    FirstName: "",
    LastName: "",
    Password: "",
    Number: ""
    });

    const handleOnChange = (e) => {
        console.log(e.target.name);
        
        const {name , value} = e.target;
        setUser((prev) =>({
             ...prev, [name] : value
        }))           
        
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <h1 className="heading">registration Form</h1>
        <label className="label" htmlFor="FirstName">FirstName:</label>
        <input className="input"  id="FirstName" type="text" name="FirstName" placeholder="FirstName" value={user.FirstName} required onChange={handleOnChange} />

        <label className="label" htmlFor="LastName">LastName:</label>
        <input className="input" id="LastName" type="text" name="LastName" placeholder="LastName" value={user.LastName} required onChange={handleOnChange} />

        <label className="label" htmlFor="password">Password:</label>
        <input className="input"  id="Password" type="password" name="Password" placeholder="****" value={user.Password} required onChange={handleOnChange} />

        <label className="label" htmlFor="Number">Number:</label>
        <input className="input"  id="Number" type="number" name="Number" placeholder="123456" value={user.Number} required onChange={handleOnChange}/>  
       <button type="submit" className="submitButton">Submit</button>
        </form>
        </>
    )
}