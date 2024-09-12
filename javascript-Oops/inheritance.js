// inheritance

class abc{// Parents class...
    constructor(){
        document.write("Parents constructor called...");
    }

    // member fun
    disp(){
        document.write("<br> disp function of Parents....")
    }
}

class xyz extends abc{
    constructor(){
        super();
        document.write("child constructor called...")
    }

    
    disp(){

        super.disp();
        document.write("<br> disp function of child....")
    }
    // function name are same and argument also same that's called method over-rindding...
    // function name are same but argument are diffent that's called method over-loadding...
}

let obj = new xyz();

obj.disp();