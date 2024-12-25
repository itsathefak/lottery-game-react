import TicketNum from "./TicketNum.jsx"

export default function Ticket({ticket}){
    return(
        <div>
            <TicketNum num={ticket[0]} />
            <TicketNum num={ticket[1]} />
        </div>
    )
}