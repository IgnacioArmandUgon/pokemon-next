import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React, { useState } from "react";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";
import { getInfo, isPokemonInFavorites, toggleFavorite } from "../../utils";
import confetti from "canvas-confetti";
interface Props {
  name: string;
  img: string;
  id: number;
  sprites: {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
  };

}

const PokemonPage: NextPage<Props> = ({ id, name, img, sprites }) => {

  const [isInFavorites, setIsInFavorites] = useState(isPokemonInFavorites(id));

  const onToggleFavorite = () => {
    toggleFavorite(id);
    setIsInFavorites(!isInFavorites);

    if (!isInFavorites) {
      confetti({
        zIndex: 1,
        particleCount: 120,
        spread: 250,
        angle: -150,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }
  };
  return (
    <Layout title={name}>
      <Grid.Container css={{ mt: "15px" }}>
        <Grid xs={12} sm={4}>
          <Card isHoverable={true} css={{ m: "10px" }}>
            <Card.Body>
              <Card.Image
                src={img || "/no-image.png"}
                alt={name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card css={{ margin: "10px" }}>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between", flexDirection: 'column', '@sm': { flexDirection: 'row' } }}
            >
              <Text h1 transform="capitalize">
                {name}
              </Text>
              <Button
                color="gradient"
                ghost={isInFavorites}
                onPress={onToggleFavorite}
              >
                {isInFavorites
                  ? "Quitar de favoritos"
                  : " Guardar en favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites: </Text>
              <Container display="flex" direction="row" gap={0}>
                <Image
                  src={sprites.front_default}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={sprites.back_default}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={sprites.front_shiny}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={sprites.back_shiny}
                  alt={name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  return {
    props: await getInfo(id)
  };
};

export default PokemonPage;
