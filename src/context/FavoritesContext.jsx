// FavoritesContext.jsx
import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {

  const [favorites, setFavorites] = useState(() => {
    try {
      const storedFavorites = localStorage.getItem("favorites");
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    } catch (error) {
      return [];
    }
  });

  const [loading, setLoading] = useState(false); // Mantém como false

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (pokemonToAdd) => {
    if (!favorites.some(fav => fav.name === pokemonToAdd.name)) {
      setFavorites((prevFavorites) => [...prevFavorites, pokemonToAdd]);
    }
  };

  const removeFromFavorites = (pokemonName) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.name !== pokemonName)
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, loading, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}