
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pikachu_triste.jpg")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.other.home.front_default
            ;
            pokeImage(pokeImg);
            console.log(pokeImg);

            const pokeName = document.getElementById("name");
            pokeName.textContent="Name: " + data.species.name.toUpperCase()
            ;
            
            const pokeStat = document.getElementById("stat");
            pokeStat.textContent="Stat: " + data.stats[0].base_stat;

            const pokeAbilities = document.getElementById("ability");
            pokeAbilities.textContent= "Ability: " + data.abilities[0].ability.name.toUpperCase()
            ;

            const poketypes = document.getElementById("type");
            poketypes.textContent= "Type: " + data.types[0].type.name.toUpperCase()
            ;

        }
    })
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

