import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getInfo = async (param: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${param}`);
  return {
    name: data.name,
    img: data.sprites.other?.dream_world.front_default,
    id: data.id,
    sprites: {
      front_default: data.sprites.front_default ,
      back_default: data.sprites.back_default,
      front_shiny: data.sprites.front_shiny,
      back_shiny: data.sprites.back_shiny,
    },
  };
};
