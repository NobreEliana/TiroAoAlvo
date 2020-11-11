import { Component } from '@angular/core';
import { JogoService } from './core/services/jogo.service';
import { Usuario } from './core/model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'novoProjeto';
  telaHeight:number;

  constructor( private _jogo:JogoService) {
    this._jogo.initParam();
    localStorage.clear();
  }


  
}
