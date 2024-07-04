import { Pokemon } from "@/app/types/pokemonsTypes";
import BackBtn from "./BackBtn";
import Image from "next/image";

interface PokemonDetailProps {
  pokemon: Pokemon;
}

function PokemonDetail({ pokemon }: PokemonDetailProps) {
  if (!pokemon || pokemon.id === undefined) {
    return <div>No Pokemon data available.</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <h1 className="text-xl font-bold text-gray-900">
            {pokemon.korean_name || pokemon.name}
          </h1>
          <p className="text-gray-600">
            No. {pokemon.id.toString().padStart(3, "0")}
          </p>
          <div className="flex justify-center mt-4">
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={140}
              height={140}
            />
          </div>
          <div className="mt-4 flex">
            <p className="text-gray-600">키: {pokemon.height / 10} m</p>
            <p className="text-gray-600 ml-4">무게: {pokemon.weight / 10} kg</p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">타입:</h2>
            <div className="flex space-x-2">
              {pokemon.types.map((type, index) => (
                <span
                  key={index}
                  className="bg-orange-200 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                >
                  {type.type.korean_name || type.type.name}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">특성:</h2>
            <div className="flex space-x-2">
              {pokemon.abilities.map((ability, index) => (
                <span
                  key={index}
                  className="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                >
                  {ability.ability.korean_name || ability.ability.name}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">기술:</h2>
            <div className="flex flex-wrap space-x-2">
              {pokemon.moves.map((move, index) => (
                <span
                  key={index}
                  className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded m-1"
                >
                  {move.move.korean_name || move.move.name}
                </span>
              ))}
            </div>
          </div>
          <BackBtn />
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
