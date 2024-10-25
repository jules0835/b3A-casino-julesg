import React, { useEffect, useState } from "react";
import UserNameManager from "../components/legal/userNameManager";
import { useNavigate } from 'react-router-dom';
import { initCardsDeckGame, getHandFromDeck, findWinner, Result } from "../utils/poker";
import CardsDeck from "../components/poker/cardsDeck";
import UserChooseCards from "../components/poker/userChooseCard";
import ReactConfetti from "react-confetti"
import { useWindowSize } from "@uidotdev/usehooks"

const PlayPoker = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [cardsDeckGame, setCardsDeckGame] = useState(initCardsDeckGame());
  const [gameState, setGameState] = useState<number | null>(0);
  const [computeurHand, setComputeurHand] = useState<Array<any>>([]);
  const [playerHand, setPlayerHand] = useState<Array<any>>([]);
  const [isChoosingCards, setIsChoosingCards] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [resultWinner, setResultWinner] = useState<Result | null>(null);
  const [isConfetti, setIsConfetti] = useState(false)
  const size = useWindowSize()

  const navigate = useNavigate();

  const handleEndGame = () => {
    setUsername(null);
    navigate('/');
  }

  const getUnusedCards = (cardsDeck: any[]) => {
    return cardsDeck.filter((card) => !playerHand.includes(card) && !computeurHand.includes(card));
  }

  const chooseCardForParty = () => {
    const newCardsComputeur = getHandFromDeck(getUnusedCards(cardsDeckGame), 4);
    setComputeurHand(newCardsComputeur);

    setIsChoosingCards(true);
  }

  const startGame = () => {
    setGameState(1);
    chooseCardForParty();
  }

  const calculResultGame = () => {
    setResultWinner(findWinner(playerHand, computeurHand));
    setShowResult(true);
  }

  useEffect(() => {
    if (resultWinner?.winner === 2) {
      console.log("Gagné");
      setIsConfetti(true)
    }
  }, [resultWinner])

  const resetGame = () => {
    setIsConfetti(false)
    setPlayerHand([]);
    setComputeurHand([]);
    setResultWinner(null);
    setShowResult(false);
    setIsChoosingCards(false);
    startGame();
  }

  return (
    <div className="relative h-screen w-screen bg-[url('/images/games/bg-poker-table.jpg')] bg-cover">
      {isConfetti && <ReactConfetti width={size.width ?? 0} height={size.height ?? 0} />}
      <div className="absolute inset-0 z-0" />
      {gameState !== 0 && (
        <img
          src="./images/games/poker-table.png"
          alt="Table de Poker"
          className="absolute inset-0 z-0 w-full h-full object-cover"
        />
      )}
      <UserNameManager setUsername={setUsername} />
      {gameState === 1 && (
        <UserChooseCards isChoosingCards={isChoosingCards} setPlayerHand={setPlayerHand} numberCards={4} cards={getUnusedCards(cardsDeckGame)} setIsChoosingCards={setIsChoosingCards} />
      )}
      <header className="flex absolute z-20 space-x-2 p-4">
        <button className="text-white text-xl hover:text-red-500 top-3 left-3" onClick={() => handleEndGame()}>
          Quitter
        </button>
        <p className="text-white text-4xl">
          -
        </p>
        <h1 className="text-white text-4xl font-bold">
          Simple Poker 2024
        </h1>
      </header>

      <main className="flex flex-col items-center justify-center text-center h-full">
        {gameState !== 0 && (
          <>
            <div className="mb-4 mt-40 z-40">
              <h1 className="text-white text-xl mb-3">
                Main de l'ordinateur</h1>
              <CardsDeck cards={computeurHand} onClickCard={() => setUsername("moi")} isVisible={showResult} />
            </div>

            <div className="flex-grow z-40">
              {
                !showResult && (
                  <button
                    onClick={() => calculResultGame()}
                    className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-md mt-16 "
                  >
                    Résultat
                  </button>

                )}

              {showResult && (
                <div>
                  {resultWinner?.winner === 2 && (
                    <h1 className="text-white text-4xl">Vous avez gagné !</h1>
                  )}
                  {resultWinner?.winner === 1 && (
                    <h1 className="text-red-500 text-4xl">Match nul !</h1>
                  )}
                  {resultWinner?.winner === 0 && (
                    <h1 className="text-red-500 text-4xl">Vous avez perdu !</h1>
                  )}
                  <h2 className="text-white text-2xl">{resultWinner?.reason}</h2>

                  <button
                    onClick={() => resetGame()}
                    className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-md mt-9 animate-bounce"
                  >
                    Rejouer
                  </button>
                </div>)}
            </div>

            <div className="mb-44 z-40">
              <h1 className="text-white text-xl mb-3">Main de {username}</h1>
              <CardsDeck cards={playerHand} onClickCard={() => setUsername("moi")} isVisible={true} />
            </div>
          </>
        )}

        {gameState === 0 && (
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-white text-4xl">Bienvenue sur Simple Poker</h1>
            <h2 className="text-white text-2xl">{username || "Joueur 1"}, vous êtes prêt à jouer ?</h2>
            <button
              onClick={() => startGame()}
              className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-md mt-16 animate-bounce"
            >
              C'est parti !
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default PlayPoker;
