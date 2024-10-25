import React from "react";

const Header = () => {
  return (
    <header className="text-white py-4 flex px-12 items-center justify-between bg-gray-800">
      <div>
        <a href="/">
          <img src="./images/nav/logo.gif" alt="logo" className="h-12 w-auto" />
        </a>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-blue-500">Home</a>
          </li>
          <li>
            <a href="/poker" className="hover:text-blue-500">Poker</a>
          </li>
          <li>
            <a href="/blackjack" className="hover:text-blue-500">Blackjack</a>
          </li>
          <li>
            <a href="/roulette" className="hover:text-blue-500">Roulette</a>
          </li>
          <li>
            <a href="/slot-machine" className="hover:text-blue-500">Slot Machine</a>
          </li>
          <li>
            <a href="/history" className="hover:text-blue-500">Historique</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;