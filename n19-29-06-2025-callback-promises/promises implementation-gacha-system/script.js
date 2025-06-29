//function that generates random number
//there are 3 types of items 3 star, 4 star, 5 star following hte rarity common, legendary, mythic
//and then if you get the mythic one there will be 50/50 chance that you got the mythic item that you wanted
//or the mythic item but not the one you wanted
//odds for each item rarity are: 70% for common 20% for legendary 5% for mythic with 50/50 won, 5% for mythic with 50/50 lost
function generateRandomNumber() {
    let min = 1;
    let max = 100;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function makeWish() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let rarity = "";
            let fiftyFifty = "nof";

            let r = generateRandomNumber();

            if (r <= 70) {
                rarity = "3 star";
            } else if (r <= 90) {
                rarity = "4 star";
            } else {
                rarity = "5 star";
                fiftyFifty = Math.random() > 0.5 ? "won" : "lost";
            }

            resolve({ rarity, fiftyFifty });
        }, 1000);
    });
}

const result = document.querySelector(".result");
const wishButton = document.getElementById("wish");

wishButton.addEventListener("click", async () => {
    wishButton.disabled = true;

    result.innerHTML = "Wishing... 🌠";
    result.style.backgroundColor = "black";
    result.style.color = "white";
    result.style.boxShadow = "none";

    const wish = await makeWish();

    if (wish.rarity === "5 star") {
        result.style.backgroundColor = "#ffd754";
        result.style.boxShadow = "0 0 20px #ffd754";
        result.innerHTML = `✨ MYTHIC PULL! ${wish.fiftyFifty === "won" ? "You WON the 50/50! ★_★" : "But you lost the 50/50 -_-"}`;
    } else if (wish.rarity === "4 star") {
        result.style.backgroundColor = "#ea87eb";
        result.innerHTML = `💜 Legendary pull ^_^`;
    } else {
        result.style.backgroundColor = "skyblue";
        result.innerHTML = `💙 Common pull O_O`;
    }

    wishButton.disabled = false;
});