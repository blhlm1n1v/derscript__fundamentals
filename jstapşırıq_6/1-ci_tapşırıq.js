// let x = [
// Number(prompt("Nomreni daxil edin:")),
// Number(prompt("Nomreni daxil edin:")),
// Number(prompt("Nomreni daxil edin:")),
// Number(prompt("Nomreni daxil edin:")),
// Number(prompt("Nomreni daxil edin:"))
// ];
// alert(Math.min.apply(null,x))

alert(Math.min(
    Number(prompt("Nomreni yaz")),
    Number(prompt("Nomreni yaz")),
    Number(prompt("Nomreni yaz")),
    Number(prompt("Nomreni yaz")),
    Number(prompt("Nomreni yaz"))
))




// console.log(Math.min(x))
// alert(Math.max(0, 150, 30, 20, -8, -200));



// // cavab
// https://stackoverflow.com/questions/31197481/how-do-i-store-a-user-promptinput-into-an-array-and-retrieve-its-max-and-min
// var numInput = prompt("Enter a series of numbers with spaces in between each:");
// var numArray = numInput.split(" ");

// alert(Math.min.apply(null, numArray));
// alert(Math.max.apply(null, numArray));