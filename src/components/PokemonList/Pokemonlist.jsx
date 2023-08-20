import { useEffect, useState } from "react";
import axios from "axios";
import "./PokemonList.css";
import Pokemon from "../Pokemon/Pokemon";

function PokemonList(){
    const [pokemonlist,setpokemonlist]=useState([]);
    const [isLoading,setisLoading]=useState(true);
    const[pokedox_url,setpokedox_url]=useState("https://pokeapi.co/api/v2/pokemon")
    const [next_url,setnext_url]=useState("");
    const [prev_url,setprev_url]=useState("");
    async function downLoadPokemon(){
        setisLoading(true);
        const response=await axios.get(pokedox_url);
        const results=response.data.results;
        console.log(response.data);
        setnext_url(response.data.next);
        setprev_url(response.data.previous);
        const pokemonresultPromise= results.map((pokemon)=>axios.get(pokemon.url));
        const pokemonData=await axios.all(pokemonresultPromise);
        console.log(pokemonData);
        const result=(pokemonData.map((pokedata)=>{
            const pokemon=pokedata.data;
            return{
                id:pokemon.id,
                name:pokemon.name,
                image:pokemon.sprites.other.dream_world.front_default,
                types:pokemon.types
            }
        }))
        console.log(result);
        setpokemonlist(result)
        setisLoading(false);
    }
    useEffect(()=>{
        downLoadPokemon();
    },[pokedox_url]);
    return (
        <div className="pokemon-list-wrapper">
           
           <div className="pokemon-wrapper">
           {isLoading?"Loading....":
           pokemonlist.map((p)=>
            <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />
           )}
           </div>
           <div className="control">
            <button disabled={prev_url==null} onClick={()=>setpokedox_url(prev_url)}>prev</button>
            <button disabled={next_url==null} onClick={()=>setpokedox_url(next_url)}>next</button>
           </div>
        </div>
        
    )
}
export default PokemonList;