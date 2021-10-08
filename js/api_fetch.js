let id = 50;

function getPokemon(id) {
    const pokemonData = $.getJSON(`https://pokeapi.co/api/v2/pokemon/${id}`, (data) => {
        $("#pokemonTypesList").html("");
        $("#pokemonAbilitiesList").html("");

        const pokemon = {
            name: data.name.split('-')[0],
            types: data.types,
            abilities: data.abilities,
            image: data.sprites.front_default
        }

        pokemon.types.forEach(type => {
            $("#pokemonTypesList").append(`<li>${type.type.name}</li>`);
        })

        pokemon.abilities.forEach(ability => {
            let abilityName = ability.ability.name.split("-");

            if (abilityName[1] !== undefined) {
                $("#pokemonAbilitiesList").append(`<li id="pokemonAbilitiesItem">${abilityName[0]} ${abilityName[1]}</li>`)
            } else {
                $("#pokemonAbilitiesList").append(`<li id="pokemonAbilitiesItem">${abilityName[0]}</li>`)
            }
        })
        

        $("#pokemonName").text(pokemon.name);
        $("#pokemonImg").attr("src", pokemon.image);
    });
}

function nextPokemon() {
    id++;
    getPokemon(id);
}

function prevPokemon() {
    id--;

    if (id == 0) {
        id = 400;
    }

    getPokemon(id);
}

getPokemon(id);