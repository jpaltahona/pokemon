export async function searchPokemon(name) {
    return new Promise( ( resolve, reject ) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then( data => resolve(data) )
        .catch( error => resolve(null))
    } )
};