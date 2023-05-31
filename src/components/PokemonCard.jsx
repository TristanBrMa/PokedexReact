const PokemonCard = ({ name, imgSrc }) => {
  return (
    <div>
      <figure>
        {imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
};

export default PokemonCard;
