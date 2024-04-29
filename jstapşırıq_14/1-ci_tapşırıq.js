// // Array.prototype ile istenilen array üçün istifadə
// //oluna bilen öz forEach metodunuzu yazin
// Array.prototype.forEacha1=function (){
//     for (let index = 0; index < array.length; index++) {
//         if(index%2!=0) {
//             console.log(this[index]);
//         }
//     }
// }
// let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]

// array.forEacha1()

// Bir ana obyektde olan massive ad, adress, profession,
// indiki vaxti və ana obyekt  __proto__ - su açarları 
// olan bir obyekt elave etmek lazimdır.
// Elave olunma bir sonsuz dovrde prompt ile olmalidir

while(true) {
    let dovr=prompt("Davamsa 'davam', tamamsa 'tamam' yazin")
    if(dovr==="davam"){
ad=prompt("Adinizi daxil edin:")
adress=prompt("dUnvaninizi axil edin:")
profession=prompt("Ixtisasinizi daxil edin:")
let info = {
    ad:ad,
    adress:adress,
    profession:profession,
    vaxt: new Date(),
    auto: function(note){
        console.log(note,'\n',info)
    }
}

info.auto("Melumatlarin dogruluguna baxin.")


let newInfo = {
    __proto__: info,
    hell: true,
    meqsed:"OK"
}
console.log(newInfo)
}
    else if(dovr==="tamam"){
        break
    }
}