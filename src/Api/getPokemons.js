export const getPokemons = ( type ) =>  new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/type/${type ? type : '1'}`).then( data => data.json() )
    .then(data => resolve( data ))
    .catch(err => {
        console.log(err)
        return reject(null)
    })
});
