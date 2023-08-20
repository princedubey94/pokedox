
import './App.css'
import Pokedox from './components/Pokedox/Pokedox'
import CustomRoutes from './routes/customRoutes'
import { Link } from 'react-router-dom'
function App() {
  
  return (
    <div className='outer-pokedex'>
    <h1 id="pokedox-heading">
    <Link style={{ textDecoration: 'none' ,color:'black' }} to="/">pokedox </Link>
    </h1> 
      <CustomRoutes/>
    </div>
  )
}

export default App
