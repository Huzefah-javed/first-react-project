import api from './API.json';
import "./component.css"
export const MainFunction = ()=>{
    return(
      api.map(ELem =>{
            return(
                <>
                <div className="main">
                <img src="./electronics.jpg" alt='images' className='img'/>
                <h3 className='seriesName'>Name: {ELem.name}</h3>
                <h4 className='seriesRating'>Rating: <span className={ELem.rating >= 8.5 ? "highRating":"lowRating"}>{ELem.rating}</span></h4>
                <p className='seriesDescription'>Description: {ELem.description}</p>
                <a href={ELem.watch_url}><button className={ELem.rating >= 8.5 ? "highRating":"lowRating"}>Watch Now</button></a>
                </div>
                
                </>
            )
        })
    )
}