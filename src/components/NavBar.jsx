const NavBar = ({ handleClick, handleClickMinus, count, pokemonList }) => {
  if (pokemonList[count] === pokemonList[3]) {
    alert("pika pikachu");
  }
  return (
    <div>
      {count > 0 && <button onClick={handleClickMinus}>précédent</button>}
      {count < pokemonList.length - 1 && (
        <button onClick={handleClick}>suivant</button>
      )}
    </div>
  );
};
export default NavBar;
