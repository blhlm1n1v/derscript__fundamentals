const tələbələr = [
    ["Nigar", "Əliyeva", 85],
    ["Orxan", "Məmmədov", 92],
    ["Fərid", "Hüseynov", 75],
    ["Zahidə", "Quliyeva", 88]
];
let sortedTələbələr = [...tələbələr];
// console.log(sortedTələbələr)

sortedTələbələr.sort((a, b) => a[2] - b[2]);
console.log(sortedTələbələr)

let bal = []
tələbələr.forEach(element => {
    bal.push(element[2])
});
console.log(bal)

//https://www.logilax.com/javascript-calculate-average/
let ortalama = (bal.reduce((a, b) => a + b, 0)) / bal.length
console.log(ortalama, bal)

bal.forEach(element => {
    if ([element] > ortalama) {
        console.log("ortalamanin uzerinde olanlarin sayi")
    }
})


console.log("Indi ise kecek max/min meselesine.")
// bele sade yolla almaq olur
let max= sortedTələbələr[0]
let min= sortedTələbələr[sortedTələbələr.length-1]
console.log(max, min)

// let minValue = Infinity;
// let maxValue = -Infinity;


// let arr=[... tələbələr]
// minValue = Math.min(...arr)


// console.log(Math.min(arr[2]))


// console.log(max)


// arr.forEach(element => {
//     if (element[2]>max) {
//         console.log(element)
//     } else if (element[2]<min) {
//         console.log(element)
//     } else (
//         console.log("Wrong")
//     )
// });

// // cavabin icinden cixardilmasi lazim
// let qiymet=[]
// let bal=[... sortedTələbələr]
// tələbələr.forEach(element => {
//     qiymet.push(element[2])
// });
// console.log(bal)
// console.log(qiymet)