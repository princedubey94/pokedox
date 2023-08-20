import { Routes,Route } from "react-router-dom";
import Pokedox from "../components/Pokedox/Pokedox";
import PokemonDetails from "../components/pokemonDetails/PokemonDetails";
function CustomRoutes(){
    return(
        <Routes>
        <Route path="/" element={<Pokedox/>} />
        <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
    </Routes>
    )
}
export default CustomRoutes;