import { useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom'
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

  return (
    <div className="App">
      
      <UserContext.Provider value={user}>


        <Nav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login setUser={setUser}/>} />
          <Route path='pokemon/list' element={<PokemonList />} />
          {/* <Route path='favorites' element={<Favorites />} /> */}
          
        </Routes>



      </UserContext.Provider>

    </div>
  );
}

export default App;
