import { Container, Text, Image, Grid, Card } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { Layout } from "../../components/layouts";
import { FavoritePokemons, NoFavorites } from "../../components/ui";
import { pokemons } from "../../utils";

export const Favorites = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  useEffect(() => {
    setFavoritePokemons(pokemons());
  }, []);

  return (
    <Layout title="Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favoritePokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default Favorites;
