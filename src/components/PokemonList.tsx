"use client";

import { Pokemon } from "@/app/types/pokemonsTypes";
import { fetchPokemonData } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";

function PokemonListPage() {
  const router = useRouter();

  const {
    data: pokemonList,
    isPending,
    isError,
  } = useQuery<Pokemon[]>({
    queryKey: ["pokemons"],
    queryFn: fetchPokemonData,
  });

  const handleCardClick = (id: number) => {
    router.push(`/detail/${id}`);
  };

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className="grid grid-cols-6 gap-4 p-2">
      {pokemonList.map((pokemon) => (
        <div
          key={pokemon.id}
          className="overflow-hidden shadow-lg p-4 border rounded-xl"
          onClick={() => handleCardClick(pokemon.id)}
        >
          <div className="flex items-center justify-center">
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={100}
              height={100}
            />
          </div>
          <div className="px-6 py-4 text-left">
            <div className="font-bold text-xl mb-2">
              {pokemon.korean_name || pokemon.name}
            </div>
            <p className="text-gray-700 text-base">도감 번호: {pokemon.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PokemonListPage;
