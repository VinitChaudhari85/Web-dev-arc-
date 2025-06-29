function getName(callback) {
    setTimeout(() => {
        console.log("Got name: Ash");
        callback();
    }, 500);
}

function getAge(callback) {
    setTimeout(() => {
        console.log("Got age: 10");
        callback();
    }, 500);
}

function getLocation(callback) {
    setTimeout(() => {
        console.log("Got location: Pallet Town");
        callback();
    }, 500);
}

function getPokemon(callback) {
    setTimeout(() => {
        console.log("Got Pokémon: Pikachu");
        callback();
    }, 500);
}

function getBadge(callback) {
    setTimeout(() => {
        console.log("Got badge: Thunder Badge");
        callback();
    }, 500);
}

// THE CURSED CHAIN 🔥🍝
getName(() => {
    getAge(() => {
        getLocation(() => {
            getPokemon(() => {
                getBadge(() => {
                    console.log("✅ All info retrieved!");
                });
            });
        });
    });
});
