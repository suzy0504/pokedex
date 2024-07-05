import PokemonDetail from "@/components/PokemonDetail";

const DetailPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const response = await fetch(
    `${process.env.POKEMONPAGE}/api/pokemons/${params.id}`
  );
  const pokemon = await response.json();

  return (
    <div>
      <PokemonDetail pokemon={pokemon} />
    </div>
  );
};

export default DetailPage;
