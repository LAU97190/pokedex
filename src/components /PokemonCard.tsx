
type pokemonProps = {
  name: string;
  imgSrc?: string;
};

  function PokemonCard({ pokemon }:{pokemon:pokemonProps}) {

return (
<>
<p>{pokemon.name}</p>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />) : ( <p>???</p>
          )}
    </>
    )
  }
   
    

  export default PokemonCard;