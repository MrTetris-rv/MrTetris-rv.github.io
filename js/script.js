import {
    listPokemons
} from './selectors.js';
import {
    getImgUrl
} from './utils.js'
import {
    pokemonCard
} from './templates.js'
import {
    showPokemon
} from './listeners.js'


async function getNameAndId(arr) {
    const asyncRes = await Promise.all(arr.map(async (item) =>
        await addPokemonToList(item.name[0].toUpperCase() + item.name.slice('1'), item.url)));
    listPokemons.innerHTML = asyncRes.join('');
    showPokemon(arr[0].url);
}


async function addPokemonToList(name, url) {
    const typesAndIdPok = await getTypes(url);
    return pokemonCard(name, getImgUrl(typesAndIdPok.id), typesAndIdPok.types, url);
}

function getTypes(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return {
                types: data.types,
                id: data.id
            }
        });

}

async function main() {
    const listOfPokemons = await fetch("https://pokeapi.co/api/v2/pokemon")
        .then(resolve => resolve.json())
        .then(resolve => resolve.results);


    getNameAndId(listOfPokemons);

}
main();