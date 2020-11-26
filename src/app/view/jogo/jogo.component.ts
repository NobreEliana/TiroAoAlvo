import { Component, OnInit, Renderer2, ViewChild, ElementRef, ViewContainerRef, OnDestroy, HostListener, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JogoService } from 'src/app/core/services/jogo.service';


@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.less']
})
export class JogoComponent implements OnInit, OnDestroy {
 
  @HostListener('click', ['$event'])
  onClick($event) {
    if ($event.target.parentNode.parentNode.className != 'alvo') return;
    let _id:number = parseInt($event.target.parentNode.parentNode.id);
    this._jogo.calcularPontuacao()
    this._jogo.removeAlvo(_id);
 }
 
  @ViewChild('container', { 
    read: ViewChild, static:false 
  } ) container:ElementRef;

  image:String;
  telaHeight:Number;
  myCounter:any;
  nome_usuario:String;
  pontuacaoUsuario:number;

  constructor(public _jogo:JogoService, private router:Router, private route: ActivatedRoute) {  }

  ngOnInit() {   
    this.telaHeight=window.innerHeight;
    if(history.state.usuario == undefined) { this.router.navigate(['/Home']); return}
   
    this._jogo.iniciarJogo(history.state.usuario,history.state.nivel,history.state.cenario);
    this.nome_usuario = this._jogo.usuario.nome;
    this.image = this._jogo.fase;

   
    
  }

  ngOnDestroy(): void {
    this._jogo.OnDestroy();
  }




 
  
}
