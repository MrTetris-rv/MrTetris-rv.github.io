import {
    listPokemons,
    displayPokemon,
    cardPokemon
} from './selectors.js';
import {
    pokemonInfo,
    pokemonStats,
    pokemonDescription
} from './templates.js';

listPokemons.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('name')) {
        showPokemon(e.target.dataset.url);
    }
});

function showPokemon(url) {
    fetch(url)
        .then(response => response.json())
        .then(async data => {
            const description = await getDescription(data.species.url)
            return {
                description: description,
                header: pokemonInfo(data.name.toUpperCase(), data.sprites.front_default, data.types),
                stat: pokemonStats(data.stats)
            }

        }).then(({
            description,
            header,
            stat
        }) => {
            displayPokemon.innerHTML = header + pokemonDescription(description) + stat;
        });
}

async function getDescription(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return desc(data.flavor_text_entries)
        })
}

function desc(arr) {
    const engArr = arr.filter((el) => el.language.name == "en").slice(-5)
    const set = engArr.reduce((set, currentValue) => {

        if ((currentValue.language.name == "en")) {
            set.add(currentValue.flavor_text.replace(/[\n\f]/g, ' '));
        }
        return set
    }, new Set());
    return Array.from(set).join(' ')
}

export {
    showPokemon
}