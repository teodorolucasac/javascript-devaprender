/*
// NÃO CONSEGUI
//somar(10);
function somar(limite) {
    for (let x = 0; x <= soma; x++) {

    }
}
*/


//PROF
somar(10);
function somar(limite) {
    let multiplos3 = 0;
    let multiplo5 = 0;
    for (i = 0; i <= limite; i++) {
        if(i % 3 === 0)
        multiplos3 += i;
        if(i % 5 === 0)
        multiplo5 +=i
    }
    console.log(multiplos3 + multiplo5)
}