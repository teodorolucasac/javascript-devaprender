const arrayObjetos = [
    {valor1: 1, valor2: 'a', valor3:'I'},
    {valor1: 2, valor2: 'b', valor3:'II'},
    {valor1: 3, valor2: 'c', valor3:'III'},
];

const selecionar = arrayObjetos.find(function(selecionar){
    return selecionar.valor3 === 'III';
});

console.log(selecionar);