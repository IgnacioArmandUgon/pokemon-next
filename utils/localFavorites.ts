const toggleFavorite = (id: number) => {
  console.log("toggleFavorite llamado");

  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id && pokeId);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } else {
    favorites.push(id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

const isPokemonInFavorites = (id: number): boolean => {
  if (typeof window === "undefined") return false; //Para que no se ejecute en servidor
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return favorites.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};
export { toggleFavorite, isPokemonInFavorites, pokemons };
