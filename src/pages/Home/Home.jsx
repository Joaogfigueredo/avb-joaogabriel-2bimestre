import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

// Dentro do JSX
<Link to="/favoritos" className="text-blue-500 underline">
  Ver Favoritos
</Link>


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
      <h1 className="text-3xl font-bold mb-4">Pokémons da Anna</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {pokemons.map((pokemon, index) => (
          <Card key={pokemon.name} pokemon={pokemon} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Home;
