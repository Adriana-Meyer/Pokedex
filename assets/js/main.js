
function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="pokemon__tipo">${typeSlot.type.name}</li>`)
}


function convertPokemonToLi(pokemon) {
   return `
    <li class="pokemon__info">
        <span class="pokemon__numero">#00${pokemon.order}</span>
        <h2 class="pokemon__nome">${pokemon.name}</h2>
        
        <div class="pokemon__detalhes">
            <ol class="pokemon__categorias">
                ${convertPokemonTypesToLi(pokemon.types).join('')}
            </ol>

            <img class="pokemon__imagem" src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}" />
        </div>  
    </li>
`
}

const pokemonList = document.getElementById('pokemon__List')

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('');
   
})
    
    
