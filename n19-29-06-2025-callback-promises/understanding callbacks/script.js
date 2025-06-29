function catchPokemon(callback) {
    setTimeout(() => {
        const pokemons = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle", "Snorlax"];
        const shinyChance = Math.random() < 0.1; // 10% chance to be shiny
        const randomIndex = Math.floor(Math.random() * pokemons.length);
        const selected = pokemons[randomIndex];

        const result = shinyChance ? `✨ Shiny ${selected}` : selected;

        callback(result); // Call the function passed in
    }, 1000); // simulate throw delay
}

// Call the function with a callback to handle the result
catchPokemon(function(pokemon) {
    console.log("🎯 You threw a Pokéball...");
    setTimeout(() => {
        console.log(`✅ You caught: ${pokemon}`);
    }, 500); // small delay for dramatic effect
});


