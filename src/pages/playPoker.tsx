import React, { useState, useEffect } from "react";
import UserNameManager from "../components/legal/userNameManager";
import { useNavigate } from 'react-router-dom';

const PlayPoker = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [gameState, setGameState] = useState<number | null>(0);
  const [computeurHand, setComputeurHand] = useState<number | null>(0);
  const [playerHand, setPlayerHand] = useState<number | null>(0);

  const navigate = useNavigate();

  const handleEndGame = () => {
    setUsername(null);
    navigate('/');
  }

  return (
    <div className="bg-[url('/images/games/bg-poker-table.jpg')] bg-cover h-screen w-screen relative">
      <UserNameManager setUsername={setUsername} />
      <img
        src="./images/games/poker-table.png"
        alt=""
        className={`w-full blur-animation-semi`}
      />
      <header>
        <button className="text-white text-xl absolute top-3 left-3 hover:text-red-500" onClick={() => handleEndGame()}>
          Quitter
        </button>
      </header>
      <main>

      </main>
    </div >
  )
}

export default PlayPoker; 