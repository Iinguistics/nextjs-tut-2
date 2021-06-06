import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Pokemon.module.scss";
import GoBackButton from "../components/GoBackButton";
import Link from "next/link";

const pokemon = ({ data }) => {
  const [pokemonData, setPokemonData] = useState(data);
  // const [pokemonDataError, setPokemonDataError] = useState(error);

  // client side approach
  //   const fetchPokimon = async () => {
  //     try {
  //       const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
  //       setPokemonData(data);
  //     } catch (error) {
  //       setPokemonDataError(error.message);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchPokimon();
  //   }, []);
  console.log(pokemonData);

  const renderPokemon = () => {
    if (pokemonData) {
      return pokemonData.results.map((item) => {
        return (
          <li key={item.name}>
            <Link href={`details/${item.name}`}>{item.name}</Link>
          </li>
        );
      });
    }
  };

  return (
    <div className={styles.pokemonMain}>
      <GoBackButton />
      {pokemonData ? (
        <>
          <h1 className={styles.head}>Pokemon:</h1>
          <ul className={styles.pokemonNames}>{renderPokemon()}</ul>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default pokemon;

// static generating approach...makes the api call before the html renders to the page
export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}

// server side props... Next.js will pre-render this page on each request using the data returned...
// good to use for example a espn site showing the current score of a game with live up to date data
// export async function getServerSideProps(context) {
//   const res = await fetch("https://pokeapi.co/api/v2/pokemon");
//   const data = await res.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: { data },
//   };
// }
