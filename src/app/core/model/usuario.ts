export class Usuario {
    nome: String;
    pontuacao: number;
    vida: number;

    constructor(nome) {
        this.nome = nome;
        this.pontuacao = 0;
        this.vida = 5;
    }
}