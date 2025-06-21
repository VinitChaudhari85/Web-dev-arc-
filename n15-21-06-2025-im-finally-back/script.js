// print collection of children of container 
console.log(document.body.firstElementChild);
let cont = document.body.firstElementChild;

console.log(cont.children)
let boxCollection = cont.children

for (let i = 0; i < boxCollection.length; i++) {
    if (i%2 == 0) {
        boxCollection[i].style.backgroundColor = "gray";
        boxCollection[i].style.boxShadow = "6px 5px 1px #b4b4b4";
    }
};