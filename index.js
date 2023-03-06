import {PI, getArea} from "./math.js";
// import * as mathUtil from "./math.js";
// console.log(mathUtil.PI);
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
    displayDOM(result)
}
function displayDOM(output){
    console.log(output);
}

// function expresion
const greeting = function(){
    console.log("Helloo!!");
}

greeting();

// arrow func
const grettings= (username) => console.log(`Hello ${username}`);
grettings("bro");
let x1=10;
let y=20
const percentage = (x1,y) => x1/ y * 100;
console.log(`${percentage(x1,y)} %`);


// nested functions
 function fun(){
    displayDOM();

 }

 // collections -> Map
  const store = new Map(["shirt", 20], ["jeans", 30], ["socket", 40]);
  /*store.get("shirt");
  store.set("hoddie", 40);
  store.delete("jeans");

  console.log(store.size); */
  //store.forEach((value, key) => console.log(`${key} $${value}`));


  // OOPS concepts
//object
const aCar ={ model:"mustang", 
           color:"red",
           year:"2023",
           drive: function(){
            console.log("you drive the car");
           },
           brake: function(){
            console.log("you stepon the brake");
           }

        
        };
console.log(aCar.color);
aCar.brake();

// this keyword
const aCar1 ={ model:"mustang", 
           color:"red",
           year:"2023",
           drive: function(){
            console.log(`you drive the ${this.model}`);
           },
           brake: function(){
            console.log("you stepon the brake");
           }

        
        };

// class
class Player{
    score =0;
    paue(){
        console.log(`Inside Function ${this.score}`);
    }

}

const player1 = new Player();
player1.score += 1;
player1.paue();


// constructor
class Player1{
   static scoreRage =0;
   static startPlayer(){
    console.log("start the player");
   }

    constructor(score){
        this.score = score;
        Player.scoreRage += 1;
        Player.startPlayer();
    }
    paue(){
        console.log(`Inside Function ${this.score}`);
    }

}

const player2 = new Player1(2);
player2.score += 1;
player2.paue();


// Inheritance
class Animal{
    alive = "true";
    run(){
        console.log("running...")
    }
}
class Rabbit extends Animal{
    alive = true;
    name ="Rabbit";
    eat(){
        console.log("eatting... Rabbit")
    }
}

class Hawk extends Animal{ 
    alive = true;
    name ="Hawk";
    eat(){
        console.log("eatting... Hawk")
    }
}

const rabbit = new Rabbit();

console.log(rabbit.alive);

// super
class Animal1{
    alive = "true";
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    run(){
        console.log("running...")
    }
}
class Rabbit1 extends Animal1{
    
    name ="Rabbit";

    constructor(name,age,food){
        super(name,age);
        this.food =food;
    }
    eat(){
        console.log("eatting... Rabbit")
    }
}

//getter setter
 class Getter{

    constructor(power){
        this._power = power;
    }
    get power(){
        return this._power;
        //return `${this._power}hp`;
    }
    set power(value){
        this._power = value;
    }
 }

// try... catch
/**
 * error -> object with descr. of went something wrong.
 * throw -> executes a user-defined error
 */
try{
    let num = window.prompt("Enter a number")
    num = Number(num)
    if(isNaN(x)) throw "exception occure"
}
catch(error){
    console.log(error);
}
finally{
    console.log("always executed");
}

// setTimeout() ->   number of milli seconds the 
            //function will execute asyncronous

let timer= setTimeout(firstMsg);
clearTimeout(timer);

// setInterval()
// setInterval(function, 1000)

// track time of operation
console.time("start time");
console.timeEnd("end time");


// promise
/**
 * asyncronous method return value
 */

const promise = new Promise((resolve, reject) => {
        let fileLoad = true;
        if(fileLoad){
            resolve("file loaded");
        }
        else{
            reject("file not loaded");
        }
});

promise.then(value => console.log(value))
        .catch(error => console.log(error));

const promise1 = new Promise(resolve=>{setTimeout(resolve,1000);});
promise.then(() => console.log("waiting 5 seconds"));


// async
async function loadFile(){
    let fileLoad = true;
    if(fileLoad){
        resolve("file loaded");
    }
    else{
        reject("file not loaded");
    }
}

loadFile().then(() => console.log("waiting 5 seconds")).catch(error => console.log(error));


// modules
console.log(PI);
console.log(getArea(5));
