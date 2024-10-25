const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="text-center"></div>
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Mmh, something went wrong
        </h1>
        <p className="text-lg text-gray-700">
          Please try again later
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Uniquement le jeu de Poker est disponible pour le moment
        </h1>
        <a href="/poker" className=" bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md mt-4">
          Jouer au Poker</a>
      </div>
      <div className="flex justify-center mt-16">
        <img src="./images/nav/error.gif" alt="Error" className="w-96 h-64 " />
      </div>
    </div>
  )
}

export default ErrorPage;