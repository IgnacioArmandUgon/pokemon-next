import React, { FC } from "react";
import { Grid, Card } from "@nextui-org/react";
import { useRouter } from "next/router";
interface Props {
  id: number;
}
export const FavoritePokemonCard: FC<Props> = ({ id }) => {
  const router = useRouter()
  const onClick = () => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card isHoverable={true} isPressable={true} onPress={onClick} css={{ p: "10px" }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100%"}
          height={140}
          alt="Pokemon image"
        />
      </Card>
    </Grid>
  );
};

export default FavoritePokemonCard;
