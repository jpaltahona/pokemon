
export function fetchPokemonData(pokemon){
    let url = pokemon.url;
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        listPokemons(pokeData)
    })
}
export async function getPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
};


export async function listPokemons(data){
console.log(data)
    return data
}