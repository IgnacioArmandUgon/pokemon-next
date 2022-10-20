import React, { FC } from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { SmallPokemon } from "../../interfaces";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  };
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
      <Card onClick={onClick} isHoverable={true} isPressable={true}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.img} width={"200%"} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">
              #{pokemon.id} {pokemon.name}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
