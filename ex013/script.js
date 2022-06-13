function Postagem (tituloPost1,mensagemPost1,autorPost1) {
        
    this.tituloPost1 = tituloPost1,
    this.mensagemPost1 = mensagemPost1,
    this.autorPost1 = autorPost1,
    this.visualizacoesPost1 = 0,
    this.comentariosPost1 = [],
    this.estaAoVivo = false

}
let postagem01 = new Postagem('Título01','Mensagem01','Lucas T.');

console.log(postagem01);