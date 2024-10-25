import { useState, useEffect, useCallback } from "react";
import Popup from "../display/popup";
import { getHandFromDeck } from "../../utils/poker";
import clsx from "clsx";
import Card from "./card";

interface UserChooseCardsProps {
  isChoosingCards: boolean;
  setPlayerHand: (cards: any[]) => void;
  numberCards: number;
  cards: any[];
  setIsChoosingCards: (isChoosingCards: boolean) => void;
}

const UserChooseCards = ({ isChoosingCards, setPlayerHand, numberCards, cards, setIsChoosingCards }: UserChooseCardsProps) => {
  const [selectedCards, setSelectedCards] = useState<any[]>([]);
  const [trial, setTrial] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [cardsDeck, setCardsDeck] = useState(cards);
  const [handPossibleCards, setHandPossibleCards] = useState<any[]>(cards);

  console.log("reload deckchoose");

  useEffect(() => {
    if (isChoosingCards) {
      setIsPopupVisible(true);
      const possibleHand = getHandFromDeck(cards, numberCards);
      setHandPossibleCards(possibleHand);
    } else {
      setIsPopupVisible(false);
      setSelectedCards([]);
      setTrial(0);
      setHandPossibleCards([]);
    }
  }, [isChoosingCards, cards, numberCards]);


  const handleCardClick = (id: number) => {
    const card = handPossibleCards.find((card) => card.id === id);
    if (card) {
      let newSelectedCards;
      if (card.isSelected) {
        newSelectedCards = selectedCards.filter((selectedCard) => selectedCard.id !== id);
      } else if (selectedCards.length < numberCards) {
        newSelectedCards = [...selectedCards, card];
      } else {
        return;
      }
      setHandPossibleCards(
        handPossibleCards.map((card) =>
          card.id === id ? { ...card, isSelected: !card.isSelected } : card
        )
      );
      setSelectedCards(newSelectedCards);
    }
  }

  const handleConfirmSelection = () => {
    if (selectedCards.length === numberCards) {
      setPlayerHand(selectedCards);
      setIsPopupVisible(false);
      setIsChoosingCards(false);
    }
  };

  const handleReloadDeck = () => {
    setTrial((prevTrial) => prevTrial + 1);
    setHandPossibleCards(getHandFromDeck(cardsDeck, numberCards));
  };

  return (
    <>
      {isPopupVisible && (
        <Popup title="Choose your cards" isOpen={isPopupVisible} canClose={false}>
          <div>
            <div className="flex  justify-between">
              {handPossibleCards.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  onClickCard={handleCardClick}
                  isVisible={true}
                />
              ))}
            </div>
            <p className="text-center mt-5">
              {selectedCards.length}/{numberCards} cards selected
            </p>
            <p className={clsx("text-red-500", { "hidden": selectedCards.length === numberCards })}>
              {trial < 2 ? "You must select 4 cards" : "You must select 4 cards, last chance"}
            </p>
            {trial < 2 && (
              <button onClick={handleReloadDeck} className="bg-orange-500 text-white rounded-lg p-2"
              >Reload Deck</button>
            )}
            {selectedCards.length === numberCards && (
              <button onClick={handleConfirmSelection} className="bg-green-500 text-white rounded-lg p-2"
              >Confirm Selection</button>
            )}
          </div>
        </Popup >
      )}
    </>
  );
};

export default UserChooseCards;
