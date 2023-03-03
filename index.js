// print on the console
console.log("login on console");
let name1 ="hello";
console.log(`hi my name is ${name1}`);

// comment

/*
    multi line comment
*/


//Variable

let age = 21;
age = age + 1;
console.log(age);

const pi = 3.14


/*
    let -> scope is inside {}
    var -> scope is into func()
    global -> it can let but not var because it can 
                change the window properties
*/

// check DataType of var
console.log(typeof age);


// One dataType to another conversion
age = Number(age);
age =String(age);
age = Boolean(age);

// User Input
let username = window.prompt("Enter user name:");
console.log("your name is", username);

// math functions
let x = 3.15
x = Math.round(x)  // x = 3
x =Math.ceil(x)  // x = 4
x = Math.pow(x, 2) // x*x

// methods sqrt(), abs(), max(), min()

x = Math.PI;

// String properties
let user = "hello";
console.log(user.length);
console.log(user.charAt(0)); // h
console.log(user.indexOf("h")) // index 0
// lastIndexOf("str"), trim(), replaceAll("from", "to")

// loops
/* 
    break -> breaks the loop
    Continue -> ignore the particular itteration amd continued...
*/ 

// ternary operator
/*  condition ? exprIfTrue : exprIfFalse*/ 


// Array
let fruits =["banana", "apple","grapes"];
console.log(fruits[0]);
fruits.push("kiwi");
fruits.pop();
/*
    fruits.unshift("") -> add varible in array begin
    fruits.shift() -> remove the element from array begin
    fruits.indexOf("") -> print index 
    fruits.length
    
*/
fruits.sort().reverse()
for(let f in fruits){
    console.log(f);
}

// Spread opeartor
/* it unpack each element from array and add to anotherr array.
*/
let array1 = ["1", "2","3"];
let array2 = ["4", "5", "6"];

array1.push(...array2);

// Rest parameters
/* indefinite number of parameters */
let a = 1;
let b = 2;
let c = 3;
let d = 4;

console.log(sum(a,b,c));

function sum(...numbers){

    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total
}

// callback
sum(2,3, displayDOM);
function sum(x,y, callback){
    let result = x+y;
    callback(result)
}
function displayDOM(output){
    console.log(output);
}