// spread operator

let arr = ["ronak","jank","dipak","shay"];
let arr2 = [10,20,30,40];

let merge_arr = [...arr,...arr2];
console.log("merge arr"+ merge_arr);

const new_arr = ["hi","by","chai","khai"];

// destructing of array...
let [a,b,c,d] = new_arr;

console.log(a);

// try in a array object...

let arr_obj = {
    id:21,
    Name:"ronak",
    age:21,
    Class:"first"
}

let {id,Name,age,Class} = arr_obj

console.log(Name);