function verificar(){
    nomeConvidado = document.querySelector('#convidado').value;
    convidadoCristian = ['Amanda', 'Sabrina', 'Rafael', 'Lucas', 'Carol', 'Jhonatan']
    if(convidadoCristian.includes(nomeConvidado)) {
        document.querySelector('#permissao').innerText =  'Você pode Entrar!'
    } else {
        document.querySelector('#permissao').innerText =  'Você não pode Entrar!'
    }
}