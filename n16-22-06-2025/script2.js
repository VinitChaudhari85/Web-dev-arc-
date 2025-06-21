// print collection of children of container 
console.log(document.body.children[1]);
let cont = document.body.children[1];

console.log(cont.children)
let boxCollection = cont.children

let theme = document.getElementById("theme-selector");
if (theme.value == "random") {

    for (let i = 0; i < boxCollection.length; i++) {
        if (i % 2 == 0) {
            boxCollection[i].style.backgroundColor = "gray";
            boxCollection[i].style.boxShadow = "6px 5px 1px #b4b4b4";
        }
    };
}
