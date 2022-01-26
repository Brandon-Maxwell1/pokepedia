import React from 'react';

const PokemonList = ( {pokeList} ) => {
    console.log('props', pokeList)

    const pokeBall = pokeList.map(pokemon => <li>{pokemon.name}</li>)

    return (
        <div>
            Pokemon List:
            {pokeBall}
        </div>
    );
}

export default PokemonList;
