


export const Card = ({singData}) =>{
    return(
        <div className="card">
            <div className="img-div">
           <img className="image" src={singData.sprites.other.dream_world.front_default} alt="" />
            </div>
            <h1 className="name">{singData.name}</h1>
            <div className="button">{singData.types.map((elem)=> elem.type.name).join(", ")}</div>
            <div className="detail">
                <p>Height: <span className="api_detail">{singData.height}</span></p>
                <p>Weight: <span className="api_detail">{singData.weight}</span></p>
                <p>Speed: <span className="api_detail">{singData.stats[0].base_stat}</span></p>
                <p>Experience: <span className="api_detail">{singData.base_experience}</span></p>
                <p>Ability: <span className="api_detail">{singData.abilities[0].ability.name}</span></p>
                <p>Attack: <span className="api_detail">{singData.stats[1].base_stat}</span></p>
            </div>

        </div>
    )
}
