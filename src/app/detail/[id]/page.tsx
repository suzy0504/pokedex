"use client";

import React, { useEffect, useState } from "react";
import { Pokemon } from "@/app/types/pokemonsTypes";
import PokemonDetail from "@/components/PokemonDetail";

const DetailPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (params.id) {
      const fetchPokemon = async () => {
        try {
          const response = await fetch(`/api/pokemons/${params.id}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data: Pokemon = await response.json();
          setPokemon(data);
        } catch (error) {
          console.error(error);
          setError("Failed to fetch data");
          setPokemon(null);
        }
      };
      fetchPokemon();
    }
  }, [params.id]);

  if (error) return <p>{error}</p>;
  if (!pokemon) return <p>Loading...</p>;

  return <div>{pokemon && <PokemonDetail pokemon={pokemon} />}</div>;
};

export default DetailPage;
