import { Container, Text, Image } from "@nextui-org/react";
export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        justifyContent: "center",
        textAlign: 'center',
        alignSelf: "center",
      }}
    >
      <Text h1>No hay favoritos</Text>
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
        }
        width={250}
        height={250}
        alt={"Default pokemon image"}
        css={{
          opacity: '0.1'
        }}
      />
    </Container>
  );
};

export default NoFavorites;
