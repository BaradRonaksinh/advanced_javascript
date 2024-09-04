// Write the code, one line for each action

// (a) Create a empty object user.

let user = {

};

// (b) added property name with the value of john
user = {
    name : "john"
}

// (c) added property surname with value of Smith.

user = {
    name : "john",
    surname : "Smith"
}

// (d) change the value of name is Pate.

user.name = "Pate";
console.log(user); 

// (e) remove the property name from the object
// delete user.name;


// Is array copied?
let fruits = ["Apples", "Pear", "Orange"]; // push a new value into the "copy" let
shoppingCart = fruits; shoppingCart.push("Banana"); // what's in fruits?
// alert( fruits.length ); // ?  --> YES fruits array is copied.....

// Map to names
let john = { name: "John", age: 25 }; 
let pete = { name: "Pete", age: 30 }; 
let mary = { name: "Mary", age: 28 }; 
let users = [ john, pete, mary ]; 
let names = users.map((i) => i.name)
alert( names ); // John, Pete, Mary

// Map to objects
let ronak = {
     name: "ronak", 
     surname: "Smith", 
     id: 1
    }; 
let vivek = { 
    name: "vivek",
    surname: "Hunt", 
    id: 2 
}; 
let jeck = { 
    name: "jeck", 
    surname: "Key", 
    id: 3 
}; 
// let usersName = [ ronak, vivek, jeck ]; 
// let usersMapped = usersName.map((j) => {
//     return j.name + j.surname + j.id
// });
// alert(usersMapped);


///*
usersMapped = [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
    ]
    alert( usersMapped[0].id ) // 1 
    alert( usersMapped[0].fullName ) // John Smith 


// Sum the properties There is a salaries object with arbitrary number of salaries. Write
// the function sumSalaries(salaries) that returns the sum of all salaries using
// Object.values and the for..of loop.If salaries is empty, then the result must be 0.
// let salaries = {
// "John": 100,
// "Pete": 300,
// "Mary": 250
// };
// let sumSalaries = salaries.value
// alert( sumSalaries(salaries) ); // 650    --->  Baki he...

// Destructuring assignment We have an object: Write the Destructuring assignment that
// reads:
// a) Name property into the variable name.
// b) Year’s property into the variable age.
// c) isAdmin property into the variable isAdmin (false, if no such property)
// d) let user = { name: "John", years: 30};

let userR = { //create a object
    name : "ronak",
    age : 21
}

let {name , age} = userR;


// js object into JSON...

let jsObj = {
    name : "ronak",
    age : 21,
    sName : "barad"
}

let JsonObj = JSON.stringify(jsObj);
console.log(JsonObj)