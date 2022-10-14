const getImgUrl = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
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
    desc,
    getImgUrl
}