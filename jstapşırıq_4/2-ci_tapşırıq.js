// function calcRectArea(width, height) {
//     return width * height;
//   }


//link
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function


//   console.log(calcRectArea(5, 6));
//   Expected output: 30

let a = Number(prompt("Ededi daxil edin:"))
let b = Number(prompt("Ededi daxil edin:"))
function hesab_topla(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert("Eded daxil edin!!!")
    }
    return a + b;
}
console.log(hesab_topla(a, b))


function hesab_bol(a, b) {
    
    return a / b;
}
console.log(hesab_bol(a, b))


function hesab_vur(a, b) {
    
    return a * b;
}
console.log(hesab_vur(a, b))


function hesab_cix(a, b) {
    
    return a - b;
}
console.log(hesab_cix(a, b))