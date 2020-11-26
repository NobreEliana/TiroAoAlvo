import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/core/services/jogo.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.less']
})
export class ResultadoComponent implements OnInit {

  telaHeight:Number;

  constructor(public _jogo:JogoService) {
    this.telaHeight=window.innerHeight;
   }

  ngOnInit() {
    
  }

}
