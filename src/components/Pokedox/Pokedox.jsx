import PokemonList from "../PokemonList/Pokemonlist";
import Search from "../Search/Search";
import "./pokedox.css"
function Pokedox(){
    return(
        <div className="pokedox-wrapper">  
            <Search/>
            <PokemonList/>
        </div>
    )
}
export default Pokedox;