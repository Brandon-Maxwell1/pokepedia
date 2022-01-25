import { useContext } from 'react';
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
  return (
    <div className="App">
      
      <UserContext.Provider value={"Brandon"}>

        
        <Nav />

        <Routes>
          <Route path='login' element={<Login />} />
        </Routes>



      </UserContext.Provider>

    </div>
  );
}

export default App;
