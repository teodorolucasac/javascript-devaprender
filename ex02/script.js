/*
const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz (entrada){
    if (entrada / 3){
    console.log('Fizz');
    } else if (entrada / 5) {
        console.log('Buzz');
    } else if (entrada / 3 && 5){
        console.log('FizzBuzz');
    } else if (!entrada / 3 || 5 ){
        console.log(entrada);
    } else if (entrada.typeof !== number) {
        console.log('Não é um número');
    }
}
*/

// REVISÃO PROFESSOR
const resultado = fizzBuzz(16);
console.log(resultado);

function fizzBuzz (entrada){
    if ( typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 ===0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    return entrada;
}