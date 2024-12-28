const pokeApiPokemon = {}

function convertPokeApiDetailToPokemons(pokeDetail) {
    const pokemon = new PokemonDetail() 
        pokemon.name = pokeDetail.name 
        pokemon.number = pokeDetail.id
        
        const types = pokeDetail.types.map((Slotypes) => Slotypes.type.name) 
        const [type] = types

        pokemon.types = types
        pokemon.type = type

        pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
        return pokemon
}




pokeApiPokemon.getPokemonDetails = (id) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemons)
}




