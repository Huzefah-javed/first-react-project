import { useEffect, useState } from "react";
import "./pokemon.css"
import { Card } from "./card";


export const PokemonProject = () => {
    const [apiData, setApiData] = useState()
    const [search, setSearch] = useState("")
    const[loading, setLoading] = useState(true)
    const[errorMessage, setErrorMessage] = useState("")


    const fetchPokemon = async () => {
        try {
            
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=51");
                const data = await response.json();
                const pokemonData = await Promise.all(
                    data.results.map(async (pokemon) => {
                        const res = await fetch(pokemon.url);
                        return await res.json();
                    })
                );
                setApiData(pokemonData);
                setLoading(false)
            } catch(error) {
                setLoading(false); 
                setErrorMessage(error.message)
            }
        }

    useEffect(() => {
        fetchPokemon();
    }, []);
    
    
    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (errorMessage) {
       return <div>
        <p>

         Error: {errorMessage}
        </p>
       </div> 
    }

    if (apiData) {
        
        let searchedDAta = apiData.filter((curElem)=>{
           return curElem.name.toLowerCase().includes(search.toLowerCase())
        })   
        
        return(<>
            <h1 className="header">Search pokemon</h1>
            <form className="form" > 
                <input type="search" name="search" id="input-search" placeholder="search Pokemon..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </form>
        <div className="main">
          
        { searchedDAta.map((singData, index) => (
            <Card key={index} singData={singData} />
        ))}
            
        </div>
            </>
    )
}
};