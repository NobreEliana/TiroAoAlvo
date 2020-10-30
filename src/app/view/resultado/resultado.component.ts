import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.less']
})
export class ResultadoComponent implements OnInit {

  telaHeight:Number;

  constructor() {
    this.telaHeight=window.innerHeight;
   }

  ngOnInit() {
  }

}
