import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./pokemonDetails.css"
import axios from "axios";
function PokemonDetails(){
    const {id}=useParams();
    const [pokemon,setPokemon]=useState({})
    console.log(id);
    async function downLoadPokemon(){
        const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon({
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            weight:response.data.weight,
            height:response.data.height,
            types:response.data.types.map((t)=>t.type.name)
    })
    }
    useEffect(
       ()=>{
            downLoadPokemon()
        },[]
    )
    return(
        <div className="pokemon-detail-wrapper">
            <img className="pokemon-details-image" src={pokemon.image}/>
            <div className="pokemon-details-name"><span>{pokemon.name}</span> </div>
            <div className="pokemon-details-name">Height:{pokemon.height}</div>
            <div className="pokemon-details-name">Weight:{pokemon.weight}</div>
            <div className="pokemon-details-types" >
                {pokemon.types && pokemon.types.map((t)=><div>{t}</div>)}
            </div>

        </div>
    )
}
export default PokemonDetails;