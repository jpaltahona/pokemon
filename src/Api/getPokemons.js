
export function fetchPokemonData(pokemon){
    return new Promise( (resolve, reject) => {
        let url = pokemon.url;
        fetch(url)
        .then(response => response.json())
        .then((pokeData) => resolve(pokeData))
        .catch(err => reject(null))
    })
};

export async function getPokemons(api) {

    return new Promise( ( resolve, reject ) => {
        fetch(`${ api ? api : 'https://pokeapi.co/api/v2/pokemon?limit=20'}`)
        .then(response => response.json())
        .then( data => resolve(data) )
        .catch( error => reject(null))
    } )

};