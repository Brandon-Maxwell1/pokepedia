import { useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom'
// Components
import Nav from './components/Nav';
// Pages
import Login from './pages/Login';
// Contexts
import UserContext from './contexts/UserContext';
// CSS
import './App.css';


function App() {
  // const user = useContext(UserContext)
  // console.log(user)

  const [user, setUser] = useState('')

  return (
    <div className="App">
      
      <UserContext.Provider value={user}>


        <Nav />

        <Routes>
          <Route path='login' element={<Login setUser={setUser}/>} />
        </Routes>



      </UserContext.Provider>

    </div>
  );
}

export default App;
