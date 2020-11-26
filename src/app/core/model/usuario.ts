export class Usuario {
    nome: String;
    pontuacao: number;
    nivel: String;
    vida: number;

    constructor(nome, nivel) {
        this.nome = nome;
        this.pontuacao = 0;
        this.nivel = nivel;
        this.vida = 5;
    }
}