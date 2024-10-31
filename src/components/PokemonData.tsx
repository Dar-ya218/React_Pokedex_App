import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { type PokemonDetails } from '@/types/pokemonDetails';

const PokemonDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
    };

    fetchPokemonDetails();
  }, [id]);

  if (!pokemon) {
    return <div className="text-center mt-8">Cargando...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-blue-500 hover:underline mb-6">
        <ArrowLeft className="mr-2" /> Volver a la lista
      </Link>
      <div className="bg-white rounded-lg shadow-md p-6">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-48 h-48 mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold mb-4 text-center capitalize">{pokemon.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Detalles</h2>
            <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
            <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Habilidades</h2>
            <ul>
              {pokemon.abilities.map((ability, index) => (
                <li key={index} className="capitalize">{ability.ability.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Tipos</h2>
          <div className="flex space-x-2">
            {pokemon.types.map((type, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm capitalize"
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;