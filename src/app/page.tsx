import Header from "@/components/Header";
import PokemonListPage from "@/components/PokemonList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  return (
    <>
      <Header />
      <PokemonListPage />
    </>
  );
}
