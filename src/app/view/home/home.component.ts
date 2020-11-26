import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { JogoService } from 'src/app/core/services/jogo.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { Modal, Mensagem } from 'src/app/core/model/modal';
import { ModalComponent } from 'src/app/core/modal/modal.component';
import { isNull, isNullOrUndefined, isString } from 'util';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  telaHeight:Number;

  formInicio = new FormGroup({
    usuario: new FormControl(''),
    fase: new FormControl(''),
    nivel: new FormControl(''),
    
  })

  constructor(public _jogo:JogoService, private router:Router,
    private route: ActivatedRoute, private modalService:ModalService) {
    
   }

  ngOnInit() {
    
    this.telaHeight=window.innerHeight;
    this._jogo.initParam();
  }

  iniciarJogo():boolean{

    let usuario = this.formInicio.value.usuario;
    let nivel = this.formInicio.value.nivel;
    let cenario= this.formInicio.value.fase;    

    
    if(!this.validaCampos(usuario,nivel,cenario))
      return false;

      this.router.navigate(['/Jogo'], {state: {usuario,nivel,cenario}});  
  }
  

  private criarMensagem(titulo:string, texto:string):void {
    let mensagem = new Mensagem(titulo, texto, false);
    this.modalService.add(new Modal(ModalComponent, mensagem));
  }

  private validaCampos(usuario:string, nivel:string, cenario:string): boolean {


    if (usuario == "" && nivel == "" && cenario == ""){
      this.criarMensagem("Erro ao Iniciar Jogo", "Todos os campos precisam ser preenchidos!");
      return false;
    }

    if(usuario === ''){
      this.criarMensagem("Erro ao Iniciar Jogo", "O nome precisa ser preenchido!");
      return false;
    }

    if(nivel === '') {
      this.criarMensagem("Erro ao Iniciar Jogo", "O nível precisa ser escolhido!");
      return false;
    }

    if(cenario === '') {
      this.criarMensagem("Erro ao Iniciar Jogo", "A fase precisa ser escolhido!");
      return false;
    }

    return true;    
  }
}
