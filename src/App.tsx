import "./App.css";
import PokemonCard from "./components/PokemonCard";





function App() {

  const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Mew",

    },
  ];
  
  

  return (
    <div>{
      pokemonList.map((pokemon) => {
        return (
          <PokemonCard 
            name={pokemon.name}
            imgSrc={pokemon.imgSrc}
          />
        )
      })
      }
    
    </div>
  );
}


export default App;