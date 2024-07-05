import { Pokemon } from "@/app/types/pokemonsTypes";

export const fetchPokemonData = async (): Promise<Pokemon[]> => {
  const response = await fetch(`/api/pokemons`);
  return await response.json();
};
