import PropTypes from "prop-types";
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

PokemonCard.PropTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
