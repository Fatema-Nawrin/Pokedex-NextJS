"use client";
import Image from "next/image";

export function PokemonImage({ image, name }: { image: string; name: string }) {
  return (
    <Image
      src={image}
      alt={name}
      priority
      fill
      style={{ objectFit: "contain" }}
    />
  );
}
