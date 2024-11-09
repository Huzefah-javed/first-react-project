import "./component.css"
const handleHiiFun = () =>{
    alert('Hii firsts time....')
}
const handleHii2Fun = () =>{
    alert('Hii firsts time 2....')
}


export const Button = (props) =>{
    const {firstFunction, secFunction} = props;
    return(
        <>
        <button className="lowRating" onClick={firstFunction}>first me</button>
        <button className="lowRating"  onClick={secFunction}>secund me</button>
        </>
    )
}

export { handleHiiFun, handleHii2Fun };
