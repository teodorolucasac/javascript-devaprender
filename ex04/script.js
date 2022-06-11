// CORREÇÃO IDENTICA AO EXERCICIO
exibirTipo(6);

function exibirTipo (parImpar){
    for (let x = 0; x <= parImpar; x++){
    if (x % 2 === 0){
        console.log(x, 'Esse número é Par!');
    } else {
        console.log(parImpar, 'Esse número é Impar!');
    }
}
}
