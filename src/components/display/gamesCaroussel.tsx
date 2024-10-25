import React from "react"
import games from "../../fixtures/games.json"
import GameChoice from "./gameChoice";

const GamesCaroussel = () => {
  return (
    <div className="flex flex-wrap justify-center overflow-hidden">
      {games.map((game) => (
        <GameChoice game={game} key={game.id} />
      ))}
    </div>
  )
}

export default GamesCaroussel;