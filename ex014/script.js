//primeira opção
let faixas = [
    {tooltip: 'até R$700', minimo: 0, máximo: 700},
    {tooltip: 'de R$700 a R$1000', minimo: 700, máximo: 1000},
    {tooltip: 'R$1000 ou mais', minimo: 1000, máximo: 9999999999},
];


//segunda opção (factory function)
function criaFaixaPreco(tooltip,minimo,maximo){
    return{
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('R$0 - R$700',1,700),
    criaFaixaPreco('R$700 - R$1000',700,1000),
    criaFaixaPreco('R$1000 mais',1000,999999999),
]


//terceira opção (conctructor function)
function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}
let faixas3 = [
    new FaixaPreco('R$0 - R$700',1,700),
    new FaixaPreco('R$700 - R$1000',700,1000),
    new FaixaPreco('R$1000 mais',1000,999999999),
]


console.log(faixas);
console.log(faixas2);
console.log(faixas3);