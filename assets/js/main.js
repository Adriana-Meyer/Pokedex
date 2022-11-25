const offset = 0;
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon__info">
        <span class="pokemon__numero">#001</span>
        <h2 class="pokemon__nome">${pokemon.name}</h2>
        
        <div class="pokemon__detalhes">
            <ol class="pokemon__categorias">
                <li class="pokemon__tipo">Grass</li>
                <li class="pokemon__tipo">Poison</li>
            </ol>

            <img class="pokemon__imagem" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="${pokemon.name}" />
        </div>  
    </li>
`
}
debugger

const pokemonList = document.getElementById('pokemon__List')

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];       
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }
        
    })
    .catch((error) => console.error(error))
    
