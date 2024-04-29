let a=0, b=1, c
for (let i = 0; i <= 20; i++) {
    console.log('Sum: ' + a);
    c = a+b; 
    a=b
    b=c;
}
alert('Sum: ' +a)
// consol'da ve alertde cavab ferqli olur