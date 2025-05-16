import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Details() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.error(err));
  }, [name]);

  if (!pokemon) return <p className="p-6">Carregando...</p>;

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">
        ← Voltar
      </Link>
      <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-32 h-32 my-4"
      />
      <p><strong>Altura:</strong> {pokemon.height}</p>
      <p><strong>Peso:</strong> {pokemon.weight}</p>
      <p><strong>Tipo:</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>
      <p><strong>Habilidades:</strong> {pokemon.abilities.map(a => a.ability.name).join(", ")}</p>
    </div>
  );
}

export default Details;
