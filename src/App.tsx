import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";




function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/otherofficial-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];



  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
		<div className="container">
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />

			<div>
				{pokemonIndex > 0 ? (
					<button type="button" onClick={handleClickPrevious}>Précédent</button>) : null}

				{pokemonIndex < pokemonList.length - 1 ? (
					<button type="button" onClick={handleClickNext}>Suivant</button>) : null}
			</div>
      
		</div>
	);

}

export default App;