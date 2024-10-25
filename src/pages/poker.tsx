import games from "../fixtures/games.json"

const Poker = () => {
  return (
    <div className="relative w-screen">
      <img
        src="./images/games/bg-poker.gif"
        alt=""
        className={`w-full blur-animation-semi`}
      />
      <div className="absolute inset-0 flex flex-col items-center ">
        <h1 className="text-white text-5xl slide-up-fade-in font-bold mt-20">
          Bienvenue sur Simple Poker
        </h1>
        <h1 className="text-white text-3xl slide-up-fade-in mt-10">
          Notre jeu de poker est simple et efficace. Affronter dès maintenant l'ordinateur et tentez de gagner la partie.
        </h1>
        <a href="/play-poker" className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-md mt-16 animate-bounce">
          Jouer Maintenant
        </a>
        <div className="slide-up-fade-in mt-32 text-white text-center">
          <h1 className="text-3xl font-bold">
            Consignes</h1>
          <p className="pt-5 text-lg text-justify mx-24">
            {games.find((game) => game.id === 3)?.instructions}
          </p>
        </div>
      </div>

    </div>

  )
}

export default Poker;