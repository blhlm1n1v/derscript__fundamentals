// const onluq = ["on", "iyirmi", "otuz", "qirx", "elli", "altmis", "yetmis", "seksen", "doxsan", "yuz"];
// const teklik = ["sifir", "bir", "iki", "uc", "dord", "bes", "alti", "yeddi", "sekkiz", "doqquz"];
// // const onluq=(on, iyirmi, otuz, qirx, elli, altmis, yetmis, seksen, doxsan);
// // const teklik=(bir, iki, uc, dord, bes, alti, yeddi, sekkiz, doqquz);

// // let a = prompt("Bir ədəd daxil edin:"); 
// // let splitA = a % 10; 
// // let splitB = a - (a % 10); 

// // let numA;
// // numA=(bir, iki, uc, dord, bes, alti, yeddi, sekkiz, doqquz);
// // let numB;
// // numB=(on, iyirmi, otuz, qirx, elli, altmis, yetmis, seksen, doxsan);


// let eded = prompt('Eded daxil edin:');
// eded = Number(eded);

// if (eded < 0 || eded > 100) {
//     alert('Wrong')
// }

// switch (10 > eded >= 0 || 100 >= eded >= 10) {
//     case (eded == 0): console.log(teklik[0]);
//         break;
//     case (eded == 1): console.log(teklik[1]);
//         break;
//     case (eded == 2): console.log(teklik[2]);
//         break;
//     case (eded == 3): console.log(teklik[3]);
//         break;
//     case (eded == 4): console.log(teklik[4]);
//         break;
//     case (eded == 5): console.log(teklik[5]);
//         break;
//     case (eded == 6): console.log(teklik[6]);
//         break;
//     case (eded == 7): console.log(teklik[7]);
//         break;
//     case (eded == 8): console.log(teklik[8]);
//         break;
//     case (eded == 9): console.log(teklik[9]);
//         break;
//     case (eded == 10): console.log(onluq[0]);
//         break;
//     case (eded == 20): console.log(onluq[1]);
//         break;
//     case (eded == 30): console.log(onluq[2]);
//         break;
//     case (eded == 40): console.log(onluq[3]);
//         break;
//     case (eded == 50): console.log(onluq[4]);
//         break;
//     case (eded == 60): console.log(onluq[5]);
//         break;
//     case (eded == 70): console.log(onluq[6]);
//         break;
//     case (eded == 80): console.log(onluq[7]);
//         break;
//     case (eded == 90): console.log(onluq[8]);
//         break;
//     case (eded == 100): console.log(onluq[9]);
//         break;
// }

/*
    "zero"=0
    "two"=2:
    "one"=1:
    "three"=3:
    "four"=4:
    "five"=5:
    "six"=6:
    "seven"=7:
    "eight"=8:
    "nine"=9:
    "ten"=10
    "eleven"=11
    "twelve"=12
*/
// const numbersToWords = {
//     0: "zero",
//     1: "one",
//     2: "two",
//     3: "three",
//     4: "four",
//     5: "five",
//     6: "six",
//     7: "seven",
//     8: "eight",
//     9: "nine",
//     10: "ten",
//     11: "eleven",
//     12: "twelve",
//     13: "thirteen",
//     14: "fourteen",
//     15: "fifteen",
//     16: "sixteen",
//     17: "seventeen",
//     18: "eighteen",
//     19: "nineteen",
//     20: "twenty",
//     30: "thirty",
//     40: "forty",
//     50: "fifty",
//     60: "sixty",
//     70: "seventy",
//     80: "eighty",
//     90: "ninety",
// };

// // Define the convertNumberToWords function
// function convertNumberToWords(number) {
//     // if number present in object no need to go further
//     if (number in numbersToWords) return numbersToWords[number];

//     // Initialize the words variable to an empty string
//     let words = "";

//     // If the number is greater than or equal to 100, handle the hundreds place (ie, get the number of hundres)
//     if (number >= 100) {
//         // Add the word form of the number of hundreds to the words string
//         words += convertNumberToWords(Math.floor(number / 100)) + " hundred";

//         // Remove the hundreds place from the number
//         number %= 100;
//     }

//     // If the number is greater than zero, handle the remaining digits
//     if (number > 0) {
//         // If the words string is not empty, add "and"
//         if (words !== "") words += " and ";

//         // If the number is less than 20, look up the word form in the numbersToWords object
//         if (number < 20) words += numbersToWords[number];
//         else {
//             // Otherwise, add the word form of the tens place to the words string
//             //if number = 37, Math.floor(number /10) will give you 3 and 3 * 10 will give you 30
//             words += numbersToWords[Math.floor(number / 10) * 10];

//             // If the ones place is not zero, add the word form of the ones place
//             if (number % 10 > 0) {
//                 words += "-" + numbersToWords[number % 10];
//             }
//         }
//     }

//     // Return the word form of the number
//     return words;
// }

// alert(convertNumberToWords(prompt()));

const numbersToWords = { 0: "sifir", 1: "bir", 2: "iki", 3: "uc", 4: "dord", 5: "bes", 6: "alti", 7: "yeddi", 8: "sekkiz", 9: "doqquz", 10: "on", 20: "iyirmi", 30: "otuz", 40: "qirx", 50: "elli", 60: "altmis", 70: "yetmis", 80: "seksen", 90: "doxsan"};

// Define the convertNumberToWords function
function convertNumberToWords(number) {
    // if number present in object no need to go further
    if (number in numbersToWords) return numbersToWords[number];

    // Initialize the words variable to an empty string
    let words = "";

    // If the number is greater than or equal to 100, handle the hundreds place (ie, get the number of hundres)
    if (number >= 100) {
        // Add the word form of the number of hundreds to the words string
        words += convertNumberToWords(Math.floor(number / 100)) + " yuz";

        // Remove the hundreds place from the number
        number %= 100;
    }

    // If the number is greater than zero, handle the remaining digits
    if (number > 0) {
        // If the words string is not empty, add "and"
        if (words !== "") words += " ";

        // If the number is less than 20, look up the word form in the numbersToWords object
        if (true) {
            // Otherwise, add the word form of the tens place to the words string
            //if number = 37, Math.floor(number /10) will give you 3 and 3 * 10 will give you 30
            words += numbersToWords[Math.floor(number / 10) * 10];

            // If the ones place is not zero, add the word form of the ones place
            if (number % 10 > 0) {
                words += " " + numbersToWords[number % 10];
            }
        }
    }
    // Return the word form of the number
    if (number > 999 || number < 0){
        alert("Xahis edirik duzgun daxil edin")
    }
    return words;
}
alert(convertNumberToWords(prompt("max uc reqemden ibaret eded daxil edin:")));