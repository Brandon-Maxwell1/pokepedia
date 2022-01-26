import { useState, useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios';
// Components
import Nav from './components/Nav';
// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import PokemonList from './pages/PokemonList';
// Contexts
import UserContext from './contexts/UserContext';
// CSS
import './App.css';


const App = () => {
  // const user = useContext(UserContext)
  // console.log(user)

  const [user, setUser] = useState('')
  const [pokeList, setPokeList] = useState([])

  

  useEffect(() => {
    fetchPokemon()
  }, [])

// if empty [], array brackets will call useEffect only once when DOM component loads

  const fetchPokemon = async() => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?&limit=1118')
      setPokeList(response.data.results)
    } catch(error) {
      console.log(error)
    }
  }
console.log('pokeList', pokeList)
  
  return (
    <div className="App">
      
      <UserContext.Provider value={user}>


        <Nav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login setUser={setUser}/>} />
          <Route path='pokemon/list' element={<PokemonList pokeList={pokeList}/>} />

          {/* can also pass like {...pokeList} */}
          
          
        </Routes>



      </UserContext.Provider>

    </div>
  );
}

export default App;
