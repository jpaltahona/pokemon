

export function typePokemonsApi() {
    return new Promise( ( resolver, reject ) => {
        fetch('https://pokeapi.co/api/v2/type')
        .then(data => data.json())
        .then(data => resolver(data))
        .catch(err => reject(null))
    } )
}

export function selecTypesPokemon(list){
    list.map( i => {
        console.log(i)
    } );
    new Promise
}