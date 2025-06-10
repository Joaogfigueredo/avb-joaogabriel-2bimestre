import { useContext, useEffect } from "react"; // Importe useEffect também
import { FavoritesContext } from "../../context/FavoritesContext";

function Favorites() {
  const { favorites, loading } = useContext(FavoritesContext);

  // Adicione um useEffect para ver quando este componente renderiza
  useEffect(() => {
    console.log("--- Favorites.jsx: Componente renderizado. Favoritos atuais:", favorites);
    console.log("--- Favorites.jsx: Loading atual:", loading);
  }, [favorites, loading]); // Depende de favorites e loading para re-logar se eles mudarem

  if (loading) {
    return <p>Carregando favoritos...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Favoritos</h1>
      {favorites.length === 0 ? (
        <p>Você não favoritou nada ainda.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {favorites.map((poke) => (
            <div key={poke.id} className="border p-4 rounded shadow text-center">
              <img src={poke.image} alt={poke.name} className="w-24 h-24 mx-auto mb-2" />
              <h2 className="capitalize font-semibold">{poke.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
