// // tapsiriq:1

// let arr = ["Saleh", "Samir", "Nahid", "Nahid", "Ramin"]
// let array=[... new Set(arr)]
// console.log(arr)
// console.log(array)


// // tapsiriq:2

// let arr = [
//     "Saleh: 1997",
//     "Samir : 1995",
//     "Nahid : 1996",
//     "Nahid : 1992",
//     "Ramin : 1999"
// ]

// arr.forEach(el => {
//     arr = el.split(":").join(",")
//     // arr.sort((a, b) => a - b) //alinmir
//     console.log(arr)
// });
// let array = [... new Set(arr)]
// console.log(array)


// // tapsiriq:3

// let arr = ["Saleh", "Samir", "Nahid", "Nahid", "Ramin"]
// arr.forEach(e=> {
//     if (arr[e] === arr[e+ 1]) {
//         arr = arr.filter(a => a !== arr[e])
//     }
// });

//niye cavab foreachle olmur?  niye cavab foreachle olmur?
//niye cavab foreachle olmur?  niye cavab foreachle olmur?
//niye cavab foreachle olmur?  niye cavab foreachle olmur?

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === arr[i+ 1]) {
//         arr=arr.filter(ele => ele !== arr[i])
//     }
// }
// let brr=arr.length
// console.log(arr)
// console.log(brr)

// // tapsiriq:1
// // Bu massivdə ən çox və ən az maaşı olan massivləri yazın
// let salary = [
//     [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//     [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//     [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//     [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
// ];
// let cem = []
// salary.forEach(el => {
//     let umumi= el.reduce((x, y) => (x + y))
//     cem.push(umumi)
// })
// console.log(cem)
// cem.sort((x, y) => (x - y))
// console.log(cem)
// console.log(cem[0], cem.at(-1))