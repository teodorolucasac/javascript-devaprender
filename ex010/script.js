let endereco = {
    rua: 'Wilibaldo Alves Ferreira',
    cidade: 'Uberlândia',
    cep: 38408792,
    };

function exibirEndereco (endereco){
    for (let exibir in endereco)
    console.log(exibir, endereco[exibir])
}

exibirEndereco(endereco);
