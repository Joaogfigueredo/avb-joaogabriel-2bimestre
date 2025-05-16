import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Pokédex</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {pokemons.map((pokemon, index) => (
          <Link
            key={pokemon.name}
            to={`/pokemon/${pokemon.name}`}
            className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition"
          >
            <p className="text-lg font-semibold capitalize">{pokemon.name}</p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              alt={pokemon.name}
              className="w-20 h-20 mx-auto mt-2"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
