
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Fase } from './fase';

@Injectable({
  providedIn: 'root',
})

export class JogoService {
    vida: number;
    tempoJogo: number;
    pontuacao: number;
    listDificuldade:any[];
    usuario: Usuario;
    pontuacaoUsuario: number;
    fase: String;

    
    iniciarJogo(nomeUsuario ,nivel,cenario){
        

        

        this.usuario = new Usuario(nomeUsuario, 0, 5);
        
        console.log(this.usuario);

        this.fase= new Fase().fase[cenario];

        console.log(this.fase);

        
        
    }

    removeAlvo(Alvo){

    }

    removerAlvos(Alvos){

    }

    calcularPontuacao(pontuacaoUsuario){

    }

}
