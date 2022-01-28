import { useState, useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios';
// Components
import Nav from './components/Nav';
// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import PokemonList from './pages/PokemonList';
import Favorites from './pages/Favorites';
// Contexts
import UserContext from './contexts/UserContext';
// CSS
import './App.css';


const App = () => {
  // const user = useContext(UserContext)
  // console.log(user)

  const [user, setUser] = useState('')
  const [pokeList, setPokeList] = useState([])
  const [favorites, setFavorites] = useState([])

  

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


  const addToFavorites = (pokemon) => {

    // When we click like inside Pokemon List, send clicked Pokemon back to App
    // Trigger this function to update our state
    // App will then pass our state as props to Favorites
    console.log('we added', pokemon)
    setFavorites([...favorites, pokemon])
  }
// console.log('pokeList', pokeList)
  
  return (
    <div className="App">
      
      <UserContext.Provider value={user}>


        <Nav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login setUser={setUser}/>} />
          <Route path='pokemon/list' element={
          <PokemonList pokeList={pokeList}
           itemsPerPage={8}
           addToFavorites={addToFavorites}
           />} />

          {/* can also pass like {...pokeList} */}
          
          <Route path='favorites' element={<Favorites favorites={favorites}/>} />
        </Routes>



      </UserContext.Provider>

    </div>
  );
}

export default App;
