import { Image, Spacer, Text, Link, useTheme } from "@nextui-org/react";
import NextLink from "next/link";

import React from "react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <NextLink href="/" passHref>
        <Link>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="Icono"
            width="70px"
            height="70px"
          />
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemón
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: "1" }} />
      <NextLink href="/favorites" passHref>
        <Link>
          <Text color="white" h3>
            Favoritos
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
