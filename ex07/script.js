//NÃO CONSEGUI FAZER

//PRIMEIRA OPÇÃO PROFESSOR
const arrayNotas = [70,70,80];

console.log(mediaAluno(arrayNotas));

function mediaAluno (notasRecebidas) {
    const mediaSomadas = calcularMedia(notasRecebidas);

    if(mediaSomadas <= 59){
        return 'F';
    } if(mediaSomadas <= 69){
        return 'D';
    } if(mediaSomadas <= 79){
        return 'C';
    } if(mediaSomadas <= 89){
        return 'B';
    } else {
        return 'A';
    }
}

function calcularMedia (arrayNotas){
    let notasSomadas = 0;
    for(let valorNotas of arrayNotas){
        notasSomadas += valorNotas; 
    }
    return notasSomadas / (arrayNotas.length);
}


//SEGUNDA OPÇÃO PROFESSOR
/*
function mediaAluno (notasRecebidas) {
    let notasSomadas = 0;
    for(let valorNotas of notasRecebidas){
        notasSomadas += valorNotas; 
    }
    const mediaSomadas = notasSomadas / (notasRecebidas.length);

    if(mediaSomadas <= 59){
        return 'F';
    } if(mediaSomadas <= 69){
        return 'D';
    } if(mediaSomadas <= 79){
        return 'C';
    } if(mediaSomadas <= 89){
        return 'B';
    } else {
        return 'A';
    }
    
}
*/