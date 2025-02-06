import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom"
import './App.css';
import Stocks from "./components/Stocks";
import Watchlist from "./components/Watchlist";
import { useState } from "react";




function App() {
  const [watchlist ,setWatchList] = useState([])
  const addToWatchList = (stock)=>{
    fetch("http://localhost:5000/api/watchlist",{
      method:"POST",
      headers:{
        "Content-Type":"application/json", 
      },
      body:JSON.stringify(stock),
    })
    .then((res)=>res.json())
    .then((data)=>{
      alert(data.message);
      setWatchList([...watchlist,stock])
    })
    .catch((error)=>console.log("Error adding to watchlist: ",error))
  }
  
  return (
    <Router>
      <nav>
        <NavLink to="/stocks">Stocks</NavLink>
        <NavLink to="/watchlist">Watchlist</NavLink>
      </nav>
      <Routes>
        <Route path="/stocks"
        element={<Stocks addToWatchList={addToWatchList}/>}/>
        <Route path="/watchlist" element={<Watchlist watchlist={watchlist} />}/>
      </Routes>

    </Router>
  );
}

export default App;
