let id = Math.floor(Math.random() * 898);

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
            $("#pokemonTypesList").append(`<li id="pokemonTypesItem">${type.type.name}</li>`);
        })

        pokemon.abilities.forEach(ability => {
            let abilityName = ability.ability.name.split("-");

            if (abilityName[1] !== undefined) {
                $("#pokemonAbilitiesList").append(`<li id="pokemonAbilitiesItem">${abilityName[0]} ${abilityName[1]}</li>`)
            } else {
                $("#pokemonAbilitiesList").append(`<li id="pokemonAbilitiesItem">${abilityName[0]}</li>`)
            }
        });
        

        $("#pokemonName").text(pokemon.name);
        $("#pokemonImg").attr("src", pokemon.image);
    });
}

function nextPokemon() {
    id++;

    if (id == 898) {
        id = Math.floor(Math.random() * 898);
    }

    getPokemon(id);
}

function prevPokemon() {
    id--;

    if (id == 0) {
        id = Math.floor(Math.random() * 898);;
    }

    getPokemon(id);
}

getPokemon(id);