import React, { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

const origin = typeof window === undefined ? "" : window.location.origin;
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
        <meta name={`description" content="Información del pokemon ${title}`} />
        <meta
          name="keywords"
          content={`${title}, pokemon, pokemons, pokedex`}
        />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
