import TicketNum from "./TicketNum.jsx";
import "./Ticket.css";

export default function Ticket({ ticket, spinning }) {
  return (
    <div className="ticket">
      <p>Ticket</p>
      {ticket.map((num, idx) => (
        <TicketNum num={num} key={idx} spinning={spinning} />
      ))}
    </div>
  );
}
