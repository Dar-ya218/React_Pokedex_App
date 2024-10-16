import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Pokemon {
  id: number;
  name: string;
  abilities: { ability: { name: string } }[];
}

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);
  const limit = 6;

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const fetchPokemons = async () => {
    const offset = (page - 1) * limit;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon: { url: string }) => {
        const res = await fetch(pokemon.url);
        return res.json();
      })
    );
    setPokemons(pokemonDetails);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Pokédex</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pokemons.map((pokemon) => (
          <Link
            to={`/pokemon/${pokemon.id}`}
            key={pokemon.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
              className="w-32 h-32 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 capitalize">{pokemon.name}</h2>
            <p className="text-gray-600">
              <strong>Habilidades:</strong>{' '}
              {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="inline-block mr-1" /> Anterior
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Siguiente <ChevronRight className="inline-block ml-1" />
        </button>
      </div>
    </div>
  );
};

export default PokemonList;