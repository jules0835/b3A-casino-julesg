import React, { useState, useEffect } from "react";

const PlayPoker = () => {
  const username = 
  return (
    <div className="bg-[url('/images/games/bg-poker-table.jpg')] bg-cover h-screen w-screen relative">
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