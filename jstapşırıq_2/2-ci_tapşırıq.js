let qiymet= prompt('Eded daxil edin:');
qiymet = Number(qiymet);

if(qiymet<0 || qiymet>100){
    prompt('Xahis edirik, bir daha yoxlayin ve duzgun daxil edin')
}
else if(qiymet>=90 || qiymet==100){
    prompt('Tebrikler, siz "A" aldiniz!!!')
}
else if(qiymet>=80){
    prompt('Tebrikler, siz "B" aldiniz!!!')
}
else if(qiymet>=70){
    prompt('Siz "C" aldiniz!!!')
}
else if(qiymet>=60){
    prompt('Siz "D" aldiniz!!!')
}
else if(qiymet>50){
    prompt('Siz "E" aldiniz!!!')
}
else if(qiymet<=50){
    prompt('Novbeti cehd imtahanda ugurlar!')
}