import { FC } from "react";

type Props = {
  game: {
    name: string;
    image: string;
    description: string;
    url: string;
    animation: string
  };
}
const GameChoice: FC<Props> = ({ game }) => {
  return (
    <div className={`flex flex-col items-center hover:scale-105 transition-transform duration-700 border-4 hover:border-white border-transparent px-32 py-1 m-2 rounded-lg bg-cover bg-center bg-gray-800 hover:bg-[url(${game.animation})] shadow-lg hover:shadow-2xl  w-48`}>
      <a href={game.url} className="flex flex-col items-center">
        <h1 className="text-white text-2xl font-bold truncate">
          {game.name}
        </h1>
        <img src={game.image} alt={game.name} className="w-32 h-32 object-cover" />
      </a>
    </div >
  );
}


export default GameChoice;


