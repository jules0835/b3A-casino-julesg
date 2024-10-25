import React from 'react';

interface CardProps {
  card: {
    image: string;
    name: string;
    isVisible: boolean;
  };
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ card, onClick }) => {
  return card.isVisible ? (
    <img
      src={card.image}
      alt={card.name}
      className="w-20 h-32 cursor-pointer reveal-card"
      onClick={onClick}
    />
  ) : (
    <img
      src="./images/games/back-card.png"
      alt="dos de carte"
      className="w-20 h-32 cursor-pointer"
      onClick={onClick}
    />
  );
}

export default Card;