
import { Injectable } from '@angular/core';
import { AlvoService } from './alvo.service';
import { AlvoComponent } from '../alvo/alvo.component';
import { Usuario } from '../model/usuario';
import { Fase } from '../model/fase';
import { AlvoProp, Alvo } from '../model/alvo';
import { VidaService } from './vida.service';
import { Vida } from '../model/vida';
import { VidaComponent } from '../vida/vida.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class JogoService {
  [x: string]: any;

    tempoJogo: number;
    pontuacao: number;
    nivel: number;
    listDificuldade:any[];
    usuario: Usuario;
    fase: String;
    listUsuarios:Usuario[];
    private intevalInit: any;
    private intevalCron: any;
    telaHeight: number;
    tempoTotal:number;

    constructor(private alvoService: AlvoService, private vidaService:VidaService, private router: Router){
      this.listUsuarios= [];
    }  

    public getTempoJogo(){
      return this.tempoJogo;
    }

    public initParam(){
      this.tempoJogo= 0;
      this.tempoTotal= 20;
      this.pontuacao=5;
      this.listDificuldade=[];
      this.listDificuldade.push( {id:0, tempo:2000, nome:"Facil"},  {id:1, tempo: 1000, nome:"Médio"},  {id:2, tempo: 800, nome:"Dificil"});
      this.telaHeight=window.innerHeight;
    }

    iniciarJogo(usuario ,nivel, cenario){
        this.cronometro();    

        this.usuario = new Usuario(usuario, this.listDificuldade[nivel].nome);
        this.fase= new Fase().criarCenario(cenario);
        this.vidaService.vida = this.usuario.vida;

        this.alvoService.levelTime = this.listDificuldade[nivel].tempo;

        for (let i = 0; i < this.usuario.vida; i++) {
          this.vidaService.add(new Vida(VidaComponent));
        //  this.alvoService.addVida( VidaComponent);          
        }        
        

        this.intevalInit = setInterval(()=>{
          

          this.spawningAlvos();

          if(this.tempoJogo >= this.tempoTotal || this.vidaService.vida <= 0){
            clearInterval(this.intevalInit);
            clearInterval(this.intevalCron);
          
          //     //    salva o usuario na lista de usuario
            this.usuario.vida = this.vidaService.vida;
            let index = -1;

            this.listUsuarios.find((usuario, _index) =>{ 
              
              if(usuario.nome == this.usuario.nome){
                index = _index;
                return usuario; 
              }
              
              

            });

            if(index == -1){
              this.listUsuarios.push( this.usuario );

            }
            else{
              if(this.usuario.pontuacao > this.listUsuarios[index].pontuacao){
                this.listUsuarios[index] = this.usuario; 
              }
            }
            

            

          //     //    salvar usuario no sessionStore ou localStore
          // localStorage.setItem("jogo", JSON.stringify(this.listUsuarios));
          // let item = JSON.parse(localStorage.getItem("jogo"));

          
          
           clearTimeout(this.alvoService.timeOut);
           this.router.navigate(['/Resultado']);

          }

        }, this.listDificuldade[nivel].tempo);
        
        
       
    }
   
    private spawningAlvos() {
      let size = this.randomSize();
      let prop = new AlvoProp(this.randomPositionX(size), this.randomPositionY(size), size);

      this.alvoService.spawningAlvo(new Alvo(AlvoComponent, prop));
    }

    removeAlvo(id:number){
      this.alvoService.removeById(id);
      
    }

  


    calcularPontuacao(){
      this.usuario.pontuacao+=this.pontuacao;
    }

    calculaVida(){
      this.usuario.vida--;
    }

    public randomPositionY(size:number){
      let positionY= Math.random()*window.innerHeight;
      let windowHeight= window.innerHeight;

      if(positionY +size >= windowHeight){
        positionY-=size;
      }

      if(positionY < 200 ){
        positionY+=200;
      }

      return positionY;
    }

    public randomPositionX( size:number){
      let positionX = Math.random()*window.innerWidth;
      let windowWidth = window.innerWidth;
      
      if(positionX + size >= windowWidth){
        positionX-=size;
      }
       return positionX;
    }

    public randomSize(){
      return Math.floor(Math.random() * (100 - 30)) + 30;
        
    }

    OnDestroy(): void {
      if(this.intevalInit)
        clearInterval(this.intevalInit);

        if(this.intevalCron)
        clearInterval(this.intevalCron);
    }

    cronometro(){ 
      this.intevalCron = setInterval(()=>{
       this.tempoJogo++;
     },1000);     
   }

}
