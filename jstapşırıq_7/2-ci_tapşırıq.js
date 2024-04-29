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

// let wage = salary.flat()
// console.log(wage);
// let annual = 0
// // for(a=0; a<wage.length; a++){
// //     annual+=wage[a];
// // }
// // console.log(annual)
// // alert("The annual salary for all workers is: "+ annual)
// wage.forEach((commonly) => {
//     annual += commonly;
// })
// console.log(annual)
// alert("Annual salary showed by functions: " + annual)
let menu = [
  ["Pizza", 10.99],
  ["Burger", 8.49],
  ["Salat", 5.99],
  ["Çörək", 2.49],
  ["Su", 1.99],
  ["Kola", 1.49]
];
// console.log(menu)
let menuName = (menu.flat())
console.log(menuName)
let menuName1 = menuName.toString().split(',').join("\n")
console.log(menuName1)

let order = prompt("Enter your meal:")
let orderNumber = Number(prompt("Enter your meal portion:"))
let payment = 1

for (x = 0; x < menu.length; x++) {
  if (order !== menu[x]) {
    console.log("We do not have this meal:(")
  }
  for (y = 0; y< orderNumber; y++) {
    //muellim hesablamir
    payment *= orderNumber
  }
}
console.log(order, payment)










// let menu = [
//   ["Pizza", 10.99],
//   ["Burger", 8.49],
//   ["Salat", 5.99],
//   ["Çörək", 2.49],
//   ["Su", 1.99],
//   ["Kola", 1.49]
// ];
// // console.log(menu)
// let menuName = (menu.flat())
// console.log(menuName)
// let menuName1 = menuName.toString().split(',').join("\n")
// console.log(menuName1)

// let order = prompt("Enter your meal:")
// let orderNumber = Number(prompt("Enter your meal portion:"))
// let payment = 1

// for (x = 0; x < menu.length; x++) {
//   if (order !== menu[x]) {
//     console.log("We do not have this meal:(")
//   }
//   for (y = 0; y < orderNumber.length; y++) {
//     payment *= orderNumber
//   }
// }
// console.log(order, payment)