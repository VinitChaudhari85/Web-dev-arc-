// the faulty calculator that does the faulty calculations for the 10% of the time and correct ones beside that

// let a = Number(prompt("Enter the first number:"));
// let b = Number(prompt("Enter the second number:"));
// let operation = prompt("Entere the number for the operation that you want to pereform:\n 1)addition,\n 2)subtraction,\n 3)multiplication,\n 4)division,\n 5)modulus:")
// operation = Number(operation);
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function mod(a,b){
    return a%b;
}


let a = 6;
let b = 9;
operation = 2;
let random = Math.random();

if (random < 0.1) {
    if (operation == 3) {
        let result = add(a,b);
        console.log("The addition of " + a + " and " + b + " is: " + result);
    }
    else if (operation == 5) {
        let result = sub(a,b);
        console.log("The subtraction of " + a + " and " + b + " is: " + result);
    }
    else if (operation == 4) {
        let result = mul(a,b);
        console.log("The multiplication of " + a + " and " + b + " is: " + result);
    }
    else if (operation == 1) {
        let result = div(a,b);
        console.log("The division of " + a + " and " + b + " is: " + result);
    }
    else if(operation == 2) {
        let result = mod(a,b);
        console.log("The modulus of " + a + " and " + b + " is: " + result);
    }
    else{
        console.log("invalid number or the operation is not available! run again!")
    }
}
else {
    if (operation == 1) {
        let result = add(a,b);
        console.log("The addition of " + a + " and " + b + " is: " + result);
    }
    else if (operation == 2) {
        let result = sub(a,b);
        console.log("The subtraction of " + a + " and " + b + " is: " + result);
    }
    else if (operation == 3) {
        let result = mul(a,b);
        console.log("The multiplication of " + a + " and " + b + " is: " + result);
    }
    else if (operation == 4) {
        let result = div(a,b);
        console.log("The division of " + a + " and " + b + " is: " + result);
    }
    else if(operation == 5){
        let result = mod(a,b);
        console.log("The modulus of " + a + " and " + b + " is: " + result);
    }
    else{
        console.log("invalid number or the operation is not available! run again!")
    }
}