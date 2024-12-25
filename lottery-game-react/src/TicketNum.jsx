import "./TicketNum.css";

export default function TicketNum({ num, spinning }) {
  return (
    <span className={`TicketNum ${spinning ? "spinning" : ""}`}>{num}</span>
  );
}
