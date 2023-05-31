import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
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
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClickMinus = () => {
    setCount(count - 1);
  };
  // const isVisble = count !== 0;
  // const isVisble2 = count !== pokemonList.length - 1;
  const pokemon = pokemonList[count];
  return (
    <div>
      <PokemonCard name={pokemon.name} imgSrc={pokemon.imgSrc} />
      {count > 0 && <button onClick={handleClickMinus}>précédent</button>}
      {count < pokemonList.length - 1 && (
        <button onClick={handleClick}>suivant</button>
      )}
    </div>
  );
}
export default App;
