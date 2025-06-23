function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function applyTheme() {
    let theme = document.getElementById("theme-selector").value;
    let boxCollection = document.querySelector(".container").children;

    if (theme === "altering") {
        for (let i = 0; i < boxCollection.length; i++) {
            if (i % 2 === 0) {
                boxCollection[i].style.backgroundColor = "gray";
                boxCollection[i].style.boxShadow = "6px 5px 1px #b4b4b4";
                boxCollection[i].style.color = "white";
            } else {
                boxCollection[i].style.backgroundColor = "aliceblue";
                boxCollection[i].style.boxShadow = "6px 5px 1px #89daff";
                boxCollection[i].style.color = "black";
            }
        }
    } else if (theme === "dark") {
        for (let i = 0; i < boxCollection.length; i++) {
            boxCollection[i].style.backgroundColor = "gray";
            boxCollection[i].style.boxShadow = "6px 5px 1px #b4b4b4";
            boxCollection[i].style.color = "white";
        }
    } else if (theme === "light") {
        for (let i = 0; i < boxCollection.length; i++) {
            boxCollection[i].style.backgroundColor = "aliceblue";
            boxCollection[i].style.boxShadow = "6px 5px 1px #89daff";
            boxCollection[i].style.color = "black";
        }
    } else if (theme === "randomized") {
        for (let i = 0; i < boxCollection.length; i++) {
            boxCollection[i].style.backgroundColor = getRandomColor();
            boxCollection[i].style.boxShadow = "6px 5px 1px " + getRandomColor();
            boxCollection[i].style.color = getRandomColor();
        }
    }
}
