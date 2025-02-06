import { useEffect, useState } from "react"
import "../App.css"
import { set } from "mongoose"
const Stocks = (props)=>{
    const [stocks , setStocks] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/api/stocks")
        .then((res)=>res.json())
        .then((data)=>setStocks(data))
        .catch((error)=>console.error("Error Fetching stocks: ",error))

    },[])
    console.log(setStocks,"StocksData")
    const getRandomColor = ()=>{
        const colors = ["#FF0000", "#00FF00"]
        return colors[Math.floor(Math.random()*colors.length)]
    }
 return(
    <div className="App">
        <h1>Stock Market MERN APP</h1>
        <h2>Stocks</h2>
        <ul>
            {console.log(stocks)}
            {stocks.map((stock)=>(
               
                <li key={stock.symbol}>
                    {stock.company}({stock.symbol})-
                    <span style={{color:getRandomColor()}}>{" "} ${stock.initial_price}</span>
                    <button onClick={()=>props.addToWatchList(stock)}>Add to My Watchlist</button>
                </li>
            ))}
        </ul>

    </div>
 )
}
export default Stocks