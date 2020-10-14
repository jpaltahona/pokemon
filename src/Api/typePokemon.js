

export function typePokemonsApi(api) {
    return new Promise( ( resolver, reject ) => {
        fetch( `${api ? api : 'https://pokeapi.co/api/v2/type' }`)
        .then(data => data.json())
        .then(data => resolver(data))
        .catch(err => reject(null))
    } )
}