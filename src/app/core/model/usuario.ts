export class Usuario {
    nome: String;
    pontuacao: number;
    vida: number;

    constructor(nome, pontuacao, vida) {
        this.nome = nome;
        this.pontuacao = pontuacao;
        this.vida = vida;
    }
}