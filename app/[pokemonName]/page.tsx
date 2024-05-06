import { PokemonImage } from "@/components/pokemonImage";
import { getPokemon } from "@/lib/pokemonAPI";
import { Progress } from "@/components/ui/progress";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;
  const pokemonObject = await getPokemon(pokemonName);
  return (
    <>
      <h1 className="text-3xl text-bold pt-2 uppercase">{pokemonName}</h1>
      <div
        className="p-4"
        style={{ position: "relative", width: "300px", height: "300px" }}
      >
        <PokemonImage
          image={pokemonObject.sprites.other["official-artwork"].front_default}
          name={pokemonName}
        ></PokemonImage>
      </div>
      <div className=" text-slate-300 text-lg pb-1">
        <span className="p-2"> Weight: {pokemonObject.weight}</span>
        <span className="p-2">Height: {pokemonObject.height}</span>
      </div>
      <div className="flex-col">
        {pokemonObject.stats.map((statObject: any) => {
          const statName = statObject.stat.name;
          const statValue = statObject.base_stat;
          return (
            <div
              className="flex items-stretch"
              style={{ width: "500px" }}
              key={statName}
            >
              <div
                className="flex items-stretch"
                style={{ width: "500px" }}
                key={statName}
              >
                <h3 className="p-1 text-slate-300 w-1/2">
                  {statName}: {statValue}
                </h3>
                <Progress className="w-2/4 m-auto" value={statValue} />
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="text-lg">Abilities:</h2>
      <div>
        {pokemonObject.abilities.map((abilityObject: any) => {
          const abilityName = abilityObject.ability.name;
          return (
            <span className="px-2 " key={abilityName}>
              {abilityName}
            </span>
          );
        })}
      </div>
    </>
  );
}
