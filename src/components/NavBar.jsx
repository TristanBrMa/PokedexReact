const NavBar = ({ count, setCount, pokemonList }) => {
  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => setCount((count = index))}>
          {pokemon.name}
        </button>
      ))}
    </>
  );
};
export default NavBar;
// {count > 0 && <button onClick={handleClickMinus}>précédent</button>}
// {count < pokemonList.length - 1 && (
//   <button onClick={handleClick}>suivant</button>
// )}
