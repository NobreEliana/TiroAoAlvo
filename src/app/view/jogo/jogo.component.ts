import { Component, OnInit, Renderer2, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { JogoService } from 'src/app/core/model/jogo';
import { AlvoService } from 'src/app/core/alvo.service';
import { AlvoComponent } from 'src/app/core/alvo/alvo.component';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.less']
})
export class JogoComponent implements OnInit {

  @ViewChild('container', { 
    read: ViewChild, static:false 
  } ) container:ElementRef;

  image:String;
  telaHeight:Number;

  constructor( private _jogo:JogoService, private renderer:Renderer2, private alvoService:AlvoService) {

    this.telaHeight=window.innerHeight;

   }

  ngOnInit() {

    this.alvoService.add(AlvoComponent); 
    // this.image= this._jogo.fase;

    // let change_this;
    // change_this= this.renderer.createElement('span');
    // this.renderer.addClass(change_this, 'change_this');
    // this.renderer.setValue(change_this, "alvo")
    // this.renderer.appendChild(this.container, change_this);

  }



}
