import React, { useEffect, useState } from "react";
import GamesCaroussel from "../components/display/gamesCaroussel";

const Main = () => {
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlur(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <main>
        <div className="relative w-screen">
          <img
            src="./images/nav/bg-casino.gif"
            alt=""
            className={`w-full ${blur ? "blur-animation" : ""}`}
          />
          {blur && (
            <div className="absolute inset-0 flex flex-col items-center justify-center ">
              <h1 className="text-white text-5xl slide-up-fade-in font-bold">Bienvenue sur Casino Game</h1>
              <h1 className="text-white text-3xl slide-up-fade-in">
                Nous vous attendions avec impatience pour vous faire découvrir nos jeux !
              </h1>
              <div className="slide-up-fade-in">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4">
                  Découvrir
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mt-4 ml-4">
                  Quitter
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="text-center pt-5 bg-gray-600 text-white p-4 h-full w-screen">
          <div>
            <h1 className="text-3xl font-bold">
              Nos jeux de casino
            </h1>
          </div>
          <div className="mt-5">
            <GamesCaroussel />
          </div>
          <div className="pt-3">
            <h1 className="text-3xl font-bold">Notre histoire</h1>
            <p className="pt-5 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
              justo ac nunc sollicitudin tincidunt. Ut quis justo eget nunc
              vehicula lacinia. Etiam in nulla a ex lacinia ultricies. Curabitur
              nec urna auctor, aliquam justo nec, tincidunt justo. Sed ac
              condimentum nunc. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Nullam nec justo ac nunc
              sollicitudin tincidunt. Ut quis justo eget nunc vehicula lacinia.
              Etiam in nulla a ex lacinia ultricies. Curabitur nec urna auctor,
              aliquam justo nec, tincidunt justo. Sed ac condimentum nunc.
              Pellentesque habitant morbi tristique sen
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Main;