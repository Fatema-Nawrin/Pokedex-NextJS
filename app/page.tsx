import { PokemonSection } from "@/components/pokemonSection";
import { getPokemonList } from "@/lib/pokemonAPI";

export default async function Home() {
  const pokemonList = await getPokemonList();
  return (
    <>
      <PokemonSection pokemonList={pokemonList} />
    </>
  );
}
