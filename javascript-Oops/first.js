//class and object in OOps...
class emp{
    // class members...?

    constructor(a,b){
        console.log("constructor called...")
        this.a = a;
        this.b = b;
    }
    

    // class functions
    add(){
        return this.a+this.b;
    }
    
}

let obj = new emp(10,20);
document.write('<br> Addition is '+ obj.add());


// /Inheritance  ---> { Parents and child } concept
// ----------- Reusebility --------------



// Abstractions & Encapsulation --> Data Hinding { Wrapping up Data into single unit}



// Polymorphism  --> One Name  Multiple Unit