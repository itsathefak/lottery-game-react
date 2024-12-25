import { useState } from "react";
import { genTicket, sum } from "./helper.js";
import Ticket from "./Ticket.jsx";

export default function Lottery({ n = 3, winningSum = 15 }) {
  const [ticket, setTicket] = useState(genTicket(n));
  const [spinning, setSpinning] = useState(false); // New state
  const isWinning = sum(ticket) === winningSum;

  const buyTicket = () => {
    setSpinning(true); // Start spinning
    setTimeout(() => {
      setTicket(genTicket(n)); // Generate new ticket after delay
      setSpinning(false); // Stop spinning
    }, 500); // Adjust spinning duration as needed
  };

  return (
    <div className="lottery">
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} spinning={spinning} />
      <br />
      <button onClick={buyTicket} disabled={spinning}>
        {spinning ? "Spinning..." : "Buy New Ticket"}
      </button>
      <h3>{isWinning && "Congratulations, You Won!"}</h3>
    </div>
  );
}
