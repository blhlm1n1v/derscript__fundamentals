let arr = [
    {
        ad: "bravo",
        nomre: 781293,
        unvan: "ganjlik mall",
        adUnvan() {
            console.log(this.ad, "-", this.unvan)
        },
        elaqeNomresi() {
            console.log(this.ad, "-", this.nomre)
        },

        mehsul: [
            {
                mal: "alma",
                qiymet: 4,
                miqdar: 12,

            },
            {
                mal: "kelem",
                qiymet: 3,
                miqdar: 8,
            },
            {
                mal: "banan",
                qiymet: 7,
                miqdar: 5,
            },
            {
                mal: "alca",
                qiymet: 10,
                miqdar: 3,
            },
            {
                mal: "kivi",
                qiymet: 8,
                miqdar: 9,
            }
        ]
    },


    {
        ad: "araz",
        nomre: 234980,
        unvan: "sumqayit",

        adUnvan() {
            console.log(this.ad, "-", this.unvan)
        },
        elaqeNomresi() {
            console.log(this.ad, "-", this.nomre)
        },
        mehsul: [
            {
                mal: "xurma",
                qiymet: 6,
                miqdar: 12,

            },
            {
                mal: "cugundur",
                qiymet: 3,
                miqdar: 11,
            },
            {
                mal: "kok",
                qiymet: 4,
                miqdar: 2,
            },
            {
                mal: "nar",
                qiymet: 13,
                miqdar: 16,
            },
            {
                mal: "portagal",
                qiymet: 12,
                miqdar: 5,
            }
        ]
    },


    {
        ad: "bazarstore",
        nomre: 657824,
        unvan: "ayna sultanova",
        adUnvan() {
            console.log(this.ad, "-", this.unvan)
        },
        elaqeNomresi() {
            console.log(this.ad, "-", this.nomre)
        },

        mehsul: [
            {
                mal: "aysberq kelem",
                qiymet: 3,
                miqdar: 4,
            },
            {
                mal: "avokado",
                qiymet: 9,
                miqdar: 2,
            },
            {
                mal: "ananas",
                qiymet: 14,
                miqdar: 8,
            },
            {
                mal: "manqo",
                qiymet: 15,
                miqdar: 3,
            },
            {
                mal: "uzum",
                qiymet: 11,
                miqdar: 7,
            }
        ]
    }
]

// //Dükanın adını və ünvanını 
// //konsola çap edən bir funksiya yazın.
// arr.forEach(element => {
//     element.adUnvan()
// });


// // Dükanın əlaqə nömrəsini 
// // konsola çap edən bir başqa funksiya yazın.
// arr.forEach(element => {
//     element.elaqeNomresi()
// });


// // Bir meyvənin adını qəbul edən və meyvənin 
// // qiymətini qaytaracaq bir funksiya yazın.
// let input=prompt("Meyvenin adini daxil edin:")
// arr.forEach(element => {
//     element.mehsul.forEach(elem=>{
//         if(elem.mal==input){
//         console.log(elem.qiymet)
//         }
//     })
// })


// // Bir meyvənin adını qəbul edən və 
// // dükanın meyvələr siyahısından həmin 
// // meyvəni silən bir funksiya yazın.
// let input=prompt("Meyvenin adini daxil edin:")
// arr.forEach(element => {
//     element.mehsul.forEach(elem=>{
//         if(elem.mal==input){
//             delete elem.mal
//             delete elem.qiymet
//             delete elem.miqdar
//         }
//     })
//     console.log(element.mehsul)
// })


// // Yeni bir meyvə əlavə edən bir funksiya yazın. 
// // Bu funksiya meyvənin adını, qiymətini və 
// // miqdarını qəbul etməlidir.
// let yeniMeyTer = {
//     mal:prompt("Yeni mehsulu elave edin:"),
//     qiymet:+prompt("Bu mehsulun qiymetini elave edin:"),
//     miqdar: +prompt("Bu mehsulun miqdarini elave edin:"),
// };
// arr.forEach(element => {
//     element.mehsul.push({yeniMeyTer})
// })
// console.log(arr)


// // Bir meyvənin miqdarını artırmaq üçün bir
// // funksiya yazın. Bu funksiya meyvənin adını və
// // artırılacaq miqdarı qəbul etməlidir.
// let input = prompt("Meyvenin adini daxil edin:")
// let miqdariniDeyis = +prompt("Yeni miqdarini daxil edin:")
// arr.forEach(element => {
//     element.mehsul.forEach(elem => {

//         if (elem.mal === input) {
//             elem.miqdar = miqdariniDeyis
//         }
//         return
//     })
// })
// console.log(arr);


// // Dükanın bütün meyvələrini konsola çap
// // edən bir funksiya yazın.
// arr.forEach(element => {
//     element.mehsul.forEach(elem=>{
//         console.log(elem.mal)
//     })
// })


// // Dükanın içində neçə ədəd meyvə olduğunu
// // qaytaracaq bir funksiya yazın.
// let meyveSayi=0
// arr.forEach(element => {
//     element.mehsul.forEach(elem=>{
//         meyveSayi+=elem.miqdar
//     })
// })
// console.log(meyveSayi)