let employees = [
    ['Jaylee Macy', 'marketing'],
    ['John Smith', 'management'],
    ['Blossom Hartley', 'design'],
    ['Austin Carpenter', 'marketing'],
    ['Joan Knowles', 'development'],
    ['Sally Nunez', 'management'],
    ['Laurel Ward', 'development'],
    ['Lark Simon', 'marketing'],
    ['Jane Stone', 'management'],
    ['Courtney Olson', 'development']
];
let is=employees.flat()
let development =[]
let department  = []
for (a=0; a<employees.length; a++) {
    for (b=0; b<employees[a].length;b++){
        department+=employees[a][b]+'\n'
        development+=employees[a][b]+'\n'
    }
}
alert(department)
alert(development.toUpperCase())