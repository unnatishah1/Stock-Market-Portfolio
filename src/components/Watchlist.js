import "../App.css"
const Watchlist = (props)=>{
    
    const getRandomColor = ()=>{
        const colors = ["#FF0000", "#00FF00"]
        return colors[Math.floor(Math.random()*colors.length)]
    }

    return(
        <div className="App">
            <h1>Stock Market MERN APP</h1>
            <h2>MY Watchlist</h2>
            <ul>
                {props.watchlist.map((stock)=>(
                    <li key={stock.symbol}>
                        {stock.company}({stock.symbol})-
                        <span style={{color:getRandomColor()}}>
                          {" "}${stock.initial_price}
                        </span>
                    </li>
                ))}
            </ul>

        </div>
    )

}
export default Watchlist