import { Component, OnInit, Renderer2, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { JogoService } from 'src/app/core/model/jogo';
import { AlvoService } from 'src/app/core/services/alvo.service';
import { AlvoComponent } from 'src/app/core/alvo/alvo.component';
import { AdType } from 'src/app/core/model/ad-type';


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

    
    setInterval(()=>{
      let positionY= Math.random()*window.innerHeight;
      let positionX=Math.random()*window.innerWidth;
  
      this.alvoService.add(new AdType(AlvoComponent, {positionX,positionY})); 
    },2000);

  }

  


}
