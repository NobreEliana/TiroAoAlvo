import { Component } from '@angular/core';
import { JogoService } from './core/model/jogo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'novoProjeto';
  telaHeight:number;

  constructor( private _jogo:JogoService) {
    _jogo.vida=5;
    _jogo.tempoJogo= 60000;
    _jogo.pontuacao=5;
    _jogo.listDificuldade=[];
    _jogo.listDificuldade.push( {id:0, nome:"Facil"},  {id:1, nome:"Médio"},  {id:2, nome:"Dificil"});
    _jogo.pontuacaoUsuario=0;
     this.telaHeight=window.innerHeight;
  }


  
}
