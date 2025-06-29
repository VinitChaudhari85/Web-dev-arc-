function getName() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Got name: Ash");
            resolve();
        }, 500);
    });
}

function getAge() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Got age: 10");
            resolve();
        }, 500);
    });
}

function getLocation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Got location: Pallet Town");
            resolve();
        }, 500);
    });
}

function getPokemon() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Got Pokémon: Pikachu");
            resolve();
        }, 500);
    });
}

function getBadge() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Got badge: Thunder Badge");
            resolve();
        }, 500);
    });
}

// 🔗 Chaining Promises
getName()
    .then(getAge)
    .then(getLocation)
    .then(getPokemon)
    .then(getBadge)
    .then(() => {
        console.log("✅ All info retrieved!");
    });
