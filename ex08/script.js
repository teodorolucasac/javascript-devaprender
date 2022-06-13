//NÃO CONSEGUI FAZER

//CORREÇÃO DO PROFESSOR 01
exibirAteriscos(10);

/*function exibirAteriscos(linhas){
    let padrao = '';
    for (x = 1; x <= linhas; x++){
        padrao += '*';
        console.log(padrao);
    }
}
*/

//CORREÇÃO DO PROFESSOR 02
function exibirAteriscos(linhas){
    
    for(let linha = 1; linha <=linhas; linha++){
        let padrao = '';
        for(let i = 0; i < linha; i++){
            padrao += '*';
        }
        console.log(padrao);
    }
}