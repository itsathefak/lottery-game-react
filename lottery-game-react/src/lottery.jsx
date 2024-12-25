import { useState } from "react"
import { genTicket , sum} from "./helper.js"; 
import Ticket from "./Ticket.jsx";

export default function Lottery({n=3, winningSum=15}){
    let [ticket , setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket = ()=>{
        setTicket(genTicket(n));
    }

    return(
        <div>
            <h1>Lottery Game !</h1>
            <div className="ticket">
                <Ticket ticket={ticket}/>
            </div>
            <br />
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulation, You Won !"}</h3>
        </div>
    )
}