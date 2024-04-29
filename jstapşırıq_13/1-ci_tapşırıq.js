let favoriteGoods = []

let shopGoods = [
    {
        shopName: 'Best Shop',
        shopContacts: '312321',
        shopAdress: 'Baki',

        fruits: [
            {
                "qiymet": 45,
                "tesvir": 'qirmizi',
                "name": "Sumka",
            },
            {
                "qiymet": 55,
                "tesvir": 'qirmizi',
                "name": "Eyaqqabi",
            },
            {
                "qiymet": 40,
                "tesvir": 'qirmizi',
                "name": "cins",

            },
            {
                "qiymet": 50,
                "tesvir": 'qirmizi',
                "name": "shalvar",
            },
            {
                "qiymet": 18,
                "tesvir": 'qirmizi',
                "name": "papaq",
            },
        ]
    },
    {
        shopName: 'My Shop',
        shopContacts: '312321',
        shopAdress: 'Baki',

        fruits: [
            {
                "qiymet": 45,
                "tesvir": 'qirmizi',
                "name": "canta",
            },
            {
                "qiymet": 55,
                "tesvir": 'qirmizi',
                "name": "don",
            },
            {
                "qiymet": 40,
                "tesvir": 'qirmizi',
                "name": "krossovka",

            },
            {
                "qiymet": 50,
                "tesvir": 'qirmizi',
                "name": "kofta",
            },
            {
                "qiymet": 18,
                "tesvir": 'qirmizi',
                "name": "papaq",
            },
        ]
    }
]

let istenilenMal = prompt("Istediyiniz mali daxil edin:")

shopGoods.forEach(element => {
    favoriteGoods.push(element.fruits.find(item => item.name === istenilenMal))
});
console.log(favoriteGoods)


// shopGoods Massvinden istediyiviz mali yazirsiz
// favoeiteGoods massivine prompt ile. Sonra
// favoriteGoods massivinde olan mallari gosterin