
let txt = '';

var disp = (num) => {
    txt += num;
    let a = document.getElementById("no").value = txt;
    // console.log(typeof a);
    
}



const finalAns = () => {
    // txt = parseInt(num);
    // disp();
    let ans = eval(txt);
    let c = document.getElementById('no') .value = ans;
    return txt = ans;
    // console.log(typeof c);
}

const allClr = () => {
    let b = document.getElementById('no').value = '';
    txt = "";
    // console.log(b + "khali");
}

const digClr = () => {
    
    txt= txt.slice(0,txt.length-1);
    document.getElementById("no").value = txt;
    // ans = txt;
}




// let removeBtn = () => {
//     arr.pop();
//     a;
// }
// console.log(removeBtn);