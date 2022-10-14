import {
    displayPokemon,
    movesPokemon
} from './selectors.js';
import {
    pokemonInfo,
    pokemonStats,
    pokemonDescription,
    pokemonMoves,
    pokemonAbilities
} from './templates.js';
import {
    desc
} from './utils.js'

function showPokemon(url) {
    fetch(url)
        .then(response => response.json())
        .then(async data => {
            console.log('data', data);
            const description = await getDescription(data.species.url)
            const moveInfo = await getMoveInfo(data.moves);
            return {
                description: description,
                header: pokemonInfo(data.name.toUpperCase(), data.sprites.front_default, data.types),
                stats: data.stats,
                moveInfo: moveInfo,
                abilities: data.abilities

            }

        }).then(({
            description,
            header,
            stats,
            moveInfo,
            abilities
        }) => {
            displayPokemon.innerHTML = header + pokemonDescription(description) + pokemonStats(stats) + pokemonAbilities(abilities);
            movesPokemon.scrollTop = 0;
            movesPokemon.innerHTML = pokemonMoves(moveInfo);
        });
}

async function getDescription(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return desc(data.flavor_text_entries)
        })
}

async function getMoveInfo(data) {
    return await Promise.all(data.map(async (item) =>
        fetch(item.move.url)
        .then(response => response.json())
        .then(data => ({
            type: data.type.name,
            accuracy: data.accuracy,
            power: data.power,
            pp: data.pp,
            damageClass: data.damage_class.name,
            itemName: item
        }))));
}



export {
    showPokemon
}