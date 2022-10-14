import {
    listPokemons,
} from './selectors.js';
import {
    showPokemon
} from './actions.js'


listPokemons.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('name')) {
        showPokemon(e.target.dataset.url);
    }
});