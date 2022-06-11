/*
let velMax = 70
let pontos = 0

console.log(consultVel(126))

function consultVel (velocidade){
    if (velocidade <= 70){
        return 'Velocidade ok! Boa viagem!'; 
    } if (velocidade <= 75){
        pontos + 1;
        return 'Excesso de Velocidade. 1 Ponto na carteira';
    } if (velocidade <= 80){
        pontos + 2;
        return 'Excesso de Velocidade. 2 Ponto na carteira';
    } if (velocidade <= 85){
        pontos + 3;
        return 'Excesso de Velocidade. 3 Ponto na carteira';
    } if (velocidade <= 90){
        pontos + 4;
        return 'Excesso de Velocidade. 4 Ponto na carteira';
    } if (velocidade <= 95){
        pontos + 5;
        return 'Excesso de Velocidade. 5 Ponto na carteira';
    } if (velocidade <= 100){
        pontos + 6;
        return 'Excesso de Velocidade. 6 Ponto na carteira';
    } if (velocidade <= 105){
        pontos + 7;
        return 'Excesso de Velocidade. 7 Ponto na carteira';
    } if (velocidade <= 110){
        pontos + 8;
        return 'Excesso de Velocidade. 8 Ponto na carteira';
    } if (velocidade <= 115){
        pontos + 9;
        return 'Excesso de Velocidade. 9 Ponto na carteira';
    } if (velocidade <= 120){
        pontos + 10;
        return 'Excesso de Velocidade. 10 Ponto na carteira';
    } if (velocidade <= 125){
        pontos + 11;
        return 'Excesso de Velocidade. 11 Ponto na carteira';
    } else {
        pontos + 12;
        return 'Excesso de Velocidade. 12 Ponto na carteira. Sua carteira foi suspensa!'
    }
}
*/

//CORREÇÃO PROFESSOR

verificarVelocidade(130);

function verificarVelocidade (velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima){
        console.log('Ok!');
    } else {
        pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto);
        if (pontos >= 12){
        console.log('Excesso de velocidade. Carteira suspensa!')
    } else {
        console.log('Excesso de velocidade. Pontos na carteira:', pontos);
    }
    }

}