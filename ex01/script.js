/* JEITO QUE EU FIZ
let mostrarValor = numeroMaior(3, 3)

function numeroMaior(a, b) {
    
    if (a > b){
        console.log(`O numero A(${a}) é maior que B(${b})!`)
    } else if (a < b){
        console.log(`O numero B(${b}) é maior que A(${a})!`);
    } else {
        console.log(`O número A(${a}) e B(${b}) são iguais`)
    }

}

console.log(mostrarValor);
*/


/* COMO O PROF FEZ 01
let ValorMaior = max(12,10);
console.log(ValorMaior);

function max (n1, n2){
    if(n1 > n2)
        return n1;
            return n2;
}
*/

// COMO O PROF FEZ 02
let ValorMaior = max(22,34);
console.log(ValorMaior);

function max (n1, n2){
    return n1 > n2 ? n1 : n2;
}

