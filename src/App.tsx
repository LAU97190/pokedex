import { useState } from "react";
import "./App.css";

import PokemonCard from "./components /PokemonCard";
const pokemonList = [
  {
    id:0,
    
    name:  "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    id:1,
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    id:2,
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    id:3,
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    id:4,
    name: "mew",
  },
];
function App() {
  const [pokemonName, setPokemonName] = useState("bulbasaur");

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }



  return (
    
    <div>
      <PokemonCard pokemon={pokemon}  />
    
     <nav>
				{pokemonList.map((pokemon) => (
					<button
						type="button"
						key={pokemon.name}
						onClick={() => setPokemonName(pokemon.name)}
					>
						{pokemon.name}
					</button>
				))}
			</nav>
	
		</div>
	);
}

export default App;