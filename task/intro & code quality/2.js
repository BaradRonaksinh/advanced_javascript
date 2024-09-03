// // What will be the result for these expressions?
// 1. 5 > 4
// 2. "apple" > "pineapple"
// 3. "2" > "12"
// 4. undefined == null
// 5. undefined === null
// 6. null == "\n0\n"
// 7. 7. null === +"\n0\n"

// console.log(5>4);
// console.log("apple" > "pineapple");
// console.log("2" > "12");
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(null == "\n0\n");
// console.log(null  === "\n0\n");

// Will alert be shown?
// if ("0") { alert( 'Hello');

let a = 0;

// if(a == 0){
//     alert("hello");
// }else{
//     alert("hyy");
// }

// what is the code below going to output? alert( null || 2 || undefined );

// let chacked = "me";
// alert(null || 2 || undefined);

// --> there will be show a 2 return velue by the alert.....

// // The following function returns true if the parameter age is greater than
// 18. Otherwise it asks for a confirmation and returns its result:
// function
// checkAge(age)
// {
// else {
// }
// }
// if (age> 18) { return true; }
// // ...return confirm (‘did parents allow you?');


// let age = 10;

// function checkAge(age){
//     if(age > 18){
//         return true;
//     }else{
//         return 'did parents allow you';
//     }
// }
// let j = checkAge(10);
// console.log(j);

//(6) Replace Function Expressions with arrow functions in the code below:
// Function
// ask(question, yes, no)
// { if (confirm(question))yes();
// else
// no();
// }
// ask("Do you agree?", function()
// { alert("You agreed."); },
// function() {
// alert("You canceled the execution."); }
// }

let ask;

ask(question, yes, no)
{
    if (confirm(question)) yes();
    else
        no();
}
ask
"Do you agree?",
    () => {
        alert("do you agreed.");
    };

() => {
    alert("you cancled the execution.");
};