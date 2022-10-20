import React, { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children: ReactNode;
  title?: string;
}
export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? title : "Pokemon app"}</title>
        <meta name="author" content="Ignacio Armand-ugón" />
        <meta name="description" content="Información del pokemon xxxx" />
        <meta name="keywords" content="xxxx, pokemon, pokemons, pokedex" />
      </Head>
      <Navbar />
      <main style={{
        padding: '0 20px'
      }}>{children}</main>
    </>
  );
};
