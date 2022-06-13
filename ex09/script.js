//NÃO CONSEGUI, EU NÃO ENTENDI COMO TENTAR DIVIDIR O NÚMERO DE 1 ATÉ O VALOR DELE PRA CONFERIR DE ELE É DE DIVISIVEL POR OUTROS OU NÃO;
/*exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for(let i = 1; i <= limite; i++){
    let exibir = '';
        for(let x = 0; x < i; x++);{
            let primo = (i % )
        }
    }
}
*/

//CORREÇÃO PROFESSOR 01
/*exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        let ehPrimo = true;
        
        for (let divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0){
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) console.log(numero)
    }
}
*/

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        if (numerosPrimos(numero)) console.log(numero);
    }
}

function numerosPrimos(numero){
    for (let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor === 0){
            return false;
        }
    }
    return true;
}
   
