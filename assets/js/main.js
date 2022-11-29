const pokemonList = document.getElementById('pokemon__List');
const loadMoreButton = document.getElementById('loadMoreButton');
const loadLessButton = document.getElementById('loadLessButton');

const maxRecords = 251;
const limit = 12;
let offset = 0;

function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `    
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
        `).join('');
        pokemonList.innerHTML = newHtml;
    })
}    
    
function showLessButton (offset) {
    if (offset === 0) {
        loadLessButton.style.display='none' 
    } else {
        loadLessButton.style.display='block' 
    } ;
}

function showMoreButton (maxRecords) {
    if ((offset + limit) > maxRecords) {
        loadMoreButton.style.display='none' 
    } else {
        loadMoreButton.style.display='block' 
    } ;
}


loadPokemonItems(offset, limit);
showLessButton (offset);


loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordNextPage = offset + limit;

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItems(offset, newLimit);
        showMoreButton (maxRecords);
               
    } else {
        loadPokemonItems(offset, limit);
        showMoreButton (maxRecords);   
    }

    showLessButton (offset);
    
})

loadLessButton.addEventListener('click', () => {
    offset -= limit;
    loadPokemonItems(offset, limit);
    showLessButton (offset);
    showMoreButton (maxRecords);  
})
