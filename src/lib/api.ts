import { Pokemon } from "@/app/types/pokemonsTypes";

export const fetchPokemonData = async ({
  queryKey,
}: {
  queryKey: [string, string];
}): Promise<Pokemon> => {
  const [_, id] = queryKey;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return response.json();
};
