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
            `<div style="background: rgb(${typesColors[type.type.name]}); "class="typeDesign">${type.type.name}</div>`
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

const pokemonAbilities = (abilities) => {
    return `
    <div class="abilityMainContainer">
        <span> Abilities: </span>
     <ul class="abilitiesContainer">
        ${abilities.map(item => `
      <li class="ability">
        <p>${item.ability.name}</p>
      </li>`).join('')}
      </ul>
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

const pokemonMoves = (moveInfo) => {
    return `
    <span class="movesTitle">Moves:</span>
    ${moveInfo.map(move => 
        `<div class="move">
             <div class="moveName">
                <div class="titleBold">${move.itemName.move.name[0].toUpperCase() + move.itemName.move.name.slice(1)}</div>
                <div class="typesList">
                    <div class="typeDesign" style="background: rgb(${typesColors[move.type]});" >${move.type}</div>
                    <div class="typeDesign" style="background: rgb(${typesColors[move.damageClass]});" >${move.damageClass}</div>
                </div>
                
        </div>

            <div class="moveInfoBox">
                <div class="moveType">PP: ${move.pp === null ? move.pp = 0 : move.pp}</div>
                 <div class="moveType">Power: ${move.power === null ? move.power = 0 : move.power}</div>
                 <div class="moveType">Accurancy: ${move.accuracy === null ? move.accuracy = 0 : move.accuracy}</div>
             </div>
        </div>
        `
    ).join('')}
    
    </div>
    `
}


export {
    pokemonInfo,
    pokemonStats,
    pokemonCard,
    pokemonDescription,
    pokemonMoves,
    pokemonAbilities
};