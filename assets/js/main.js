
function convertPokemonToLi(pokemon) {
   return `
    <li class="pokemon__info ${pokemon.type}">
        <span class="pokemon__numero">#00${pokemon.number}</span>
        <h2 class="pokemon__nome">${pokemon.name}</h2>
        
        <div class="pokemon__detalhes">
            <ol class="pokemon__categorias">
                ${pokemon.types.map((type) => `<li class="pokemon__tipo ${type}">${type}</li>`).join('')}
            </ol>

            <img class="pokemon__imagem" src="${pokemon.photo}" alt="${pokemon.name}" />
        </div>  
    </li>
`
}

const pokemonList = document.getElementById('pokemon__List')

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('');
   
})
    
    
