let numeros = [1,2,3,4,5,6,7];
let outros = numeros;
//solução 1 não apaga outras referencias
/*
numeros = [];
console.log(numeros);
console.log(outros);
*/

//solução 2 apaga outras referencias
numeros.length = 0;
console.log(numeros);
console.log(outros);


//solução 3
/*
numeros.splice(0,numeros.length);
console.log(numeros);
console.log(outros);
*/
