"use client";

import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PokemonCard } from "./pokemonCard";

interface PokemonGridProps {
  pokemonList: [];
}

export function PokemonSection({ pokemonList }: PokemonGridProps) {
  const [searchInput, setSearchInput] = useState("");
  console.log(pokemonList);
  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  };
  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <>
      <div>
        <h3 className="text-2xl py-4">Search for Pokemon here</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="pokemonName">Pokemon Name</Label>
          <Input
            type="text"
            value={searchInput}
            id="pokemonName"
            onChange={(e) => setSearchInput(e.target.value)}
          ></Input>
        </div>
        <h3 className="text-3xl text-center pt-6 pb-3">Pokemon Collection</h3>
      </div>
      <div className="mb-30 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        {filteredPokemonList.map((pokemon: any) => {
          return (
            <PokemonCard name={pokemon.name} key={pokemon.name}></PokemonCard>
          );
        })}
      </div>
    </>
  );
}
