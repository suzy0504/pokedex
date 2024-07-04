"use client";

import PokemonDetail from "@/components/PokemonDetail";
import { fetchPokemonData } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const DetailPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  // const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  // const [error, setError] = useState<string | null>(null);
  const { id } = params;
  const {
    data: pokemon,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: fetchPokemonData,
  });

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  // useEffect(() => {
  //   if (params.id) {
  //     const fetchPokemon = async () => {
  //       try {
  //         const response = await fetch(`/api/pokemons/${params.id}`);
  //         if (!response.ok) {
  //           throw new Error(`HTTP error! status: ${response.status}`);
  //         }
  //         const data: Pokemon = await response.json();
  //         setPokemon(data);
  //       } catch (error) {
  //         console.error(error);
  //         setPokemon(null);
  //       }
  //     };
  //     fetchPokemon();
  //   }
  // }, [params.id]);

  // if (error) return <p>{error}</p>;
  // if (!pokemon) return <p>Loading...</p>;

  return <div>{pokemon && <PokemonDetail pokemon={pokemon} />}</div>;
};

export default DetailPage;
