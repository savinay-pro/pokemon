
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import CustomRoutes from './Routes/CustomRoutes'
import { Link } from 'react-router-dom'; // Add this import

function App() {

  return (
    <div className='outer-pokedex'>
      <h1 id="pokedex-heading">
        <Link to="/pokemon/">Pokedex</Link>
      </h1>
      <CustomRoutes/>
    </div>
  )
}

export default App