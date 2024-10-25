import Card from "./card";

interface CardsDeckProps {
  cards: any[];
  onClickCard: (index: number) => void;
  isVisible: boolean;
}

const CardsDeck: React.FC<CardsDeckProps> = ({ cards, onClickCard, isVisible }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 z-50">
      {cards?.map((card, index) => (
        <Card key={index} card={card} onClickCard={onClickCard} isVisible={isVisible} />
      ))}
    </div>
  );
}

export default CardsDeck;
