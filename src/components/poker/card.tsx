import React from 'react';
import clsx from 'clsx';

interface CardProps {
  card: {
    image: string;
    name: string;
    isVisible: boolean;
    isSelected: boolean;
    id: number;
  };
  onClickCard: (id: number) => void;
  isVisible: boolean;
}

const Card: React.FC<CardProps> = ({ card, onClickCard, isVisible }) => {
  return (card?.isVisible || isVisible) ? (
    <img
      src={`./images/games/poker-cards/${card.image}`}
      alt={card.name}
      className={clsx('w-20 h-28 cursor-pointer reveal-card z-40'
        , { 'border-blue-500 border-2 rounded-lg shadow-lg': card.isSelected })}
      onClick={() => onClickCard(card.id)}
    />
  ) : (
    <img
      src="./images/games/poker-cards/back-card.png"
      alt="dos de carte"
      className="w-28 h-28 cursor-pointer z-40"
      onClick={() => onClickCard(card.id)}
    />
  );
}

export default Card;