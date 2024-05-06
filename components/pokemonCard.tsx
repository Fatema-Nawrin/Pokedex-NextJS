import Link from "next/link";

interface PokemonCardProps {
  name: string;
}

export function PokemonCard({ name }: PokemonCardProps) {
  return (
    <Link
      href={name}
      className="group rounded-lg border border-transparent m-3 p-4 transition-colors dark:border-gray-400"
    >
      <h2 className="text-2xl font-medium uppercase">{name}</h2>
    </Link>
  );
}
