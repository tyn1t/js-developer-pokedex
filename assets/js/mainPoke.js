const pokemonDetails = document.getElementById("pokemon-pokedex")
const content_po  = document.getElementById("content")



function listPokemon(pokemon) {
    return `
        <div class="content-po">
            <div class="content-pokemon ${pokemon.type}" id="content-pokemon">
                <div id="detailsPokemon-top" class="detailsModal-top">
                    <div class="texto-nome">
                    <div class="name">
                        <h2>${pokemon.name}</h2>
                    </div>
                    <div class="num">
                        <p>#${pokemon.number}</p>
                    </div>
                    
                    <div class="type">
                        ${pokemon.types.map((type) => `<p>${type}</p>`).join('')}
                    </div>
                </div>
                </div>
                <div class="detailsModal-dow">
                <div class="img-pokemon">
                    <img src="${pokemon.photo}">
                </div>
                <ul class="menu-pokemon">
                    <li>
                    <a href="#">Base</a>
                    <a href="#">Stats</a>
                    <a href="#">Evolution Chain</a>
                    <a href="#">Moves</a>
                    </li>
                </ul>
                <div class="infor-menu">
                    <li class="pokemon-details">
                        <div>
                        <label for="">base. Exp</label><label>142.exp.</label>
                        </div>
                        <div>
                        <label for="">heigth</label><label>1.00 m</label>
                        </div>
                        <div>
                        <label for="">Weight</label><label>13.0 kg </label>
                        </div>
                        <div>
                        <label for="">Abilities</label><label>Overgrown Chlorophyll</label>
                        </div>
                        <div>
                        <label for="">Egg Groups</label><label>monster, plant</label>
                        </div>
                        <div>
                        <label for="">Generation</label><label>Grneration 1</label>
                        </div>
                    </li>
                </div>
                </div>
            </div>
        </div>
    `
}



function loadPokemon(id) {
    pokeApiPokemon.getPokemonDetails(id).then((pokemons) => {
    
        content_po.innerHTML = ``
        const newHtmL = listPokemon(pokemons)
        pokemonDetails.innerHTML = newHtmL
    })
}

