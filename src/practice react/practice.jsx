import { useContext } from "react"
import { MyName } from "../App"

export const Practice = () => {
   let data = useContext(MyName)
    return(
        <>
        <h1>I m huzefah javed and i m gong to practice some contextApi concept,! {data}</h1>
        </>
    )
}