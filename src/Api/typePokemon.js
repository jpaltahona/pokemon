export async function typePokemonsApi() {
    const data = await fetch('https://pokeapi.co/api/v2/type')
    const info = await data.json();
    return info
}