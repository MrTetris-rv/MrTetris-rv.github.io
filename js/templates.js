import {
    typesColors,
    backgroundColors,
    statsColors
} from './consts.js'

const pokemonInfo = (name, imageUrl, types) => {
    let colorBg = types[0].type.name;
    return `
    <div class="header" style="background: ${backgroundColors[colorBg]};">
        <img src="${imageUrl}" alt="" class="imgPokemon" />
        <p>${name}</p>
        <div class="divTypes">
        ${types.map(type => 
            `<div style="background: rgb(${typesColors[type.type.name]}); "class="type">${type.type.name}</div>`
    ).join('')}
        </div>
    </div>`;
};


const pokemonStats = (stats) => {
    return `
    <div class="stats">
        <span>Base Stats: </span>
            <div class="divStats">
      ${stats.map(stat => `
      <div class="stat">
        <p>${stat.stat.name}</p>
        <div class="bar">
         <div class="fillBar" style="width:${stat.base_stat}%; background:${statsColors[stat.stat.name]}; "> ${stat.base_stat}</div>
        </div>
      
      </div>`).join('')}
      </div>
    </div>`;
};

const pokemonCard = (name, imageUrl, types, url) => {
    let colorBg = types[0].type.name;
    return `
    <div class="name" data-url="${url}" data-name="${name}" style="background: ${backgroundColors[colorBg]};">
        <img src="${imageUrl}" alt="" class="imgPok" />
        <p>${name}</p>
    </div>`;
};

const pokemonDescription = (descr) => {
    return `
    <div class="description">
        <span>Description: </span> ${descr}
    </div>
  
    `
};


export {
    pokemonInfo,
    pokemonStats,
    pokemonCard,
    pokemonDescription
};