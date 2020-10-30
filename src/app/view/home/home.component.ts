import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/core/model/jogo';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Fase } from 'src/app/core/model/fase';





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

  constructor( private _jogo:JogoService, private router:Router,
    private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    
    this.telaHeight=window.innerHeight;
  
  }

  iniciarJogo(){

    let usuario = this.formInicio.value.usuario;
    let nivel = this.formInicio.value.nivel;
    let cenario= this.formInicio.value.fase;

    if (usuario === '' || nivel ==='' || cenario ===''){
      alert('Preencha todos os campos!')

      return false
      
    }

    this.router.navigate(['/Jogo']);
    
    this._jogo.iniciarJogo(usuario,nivel,cenario);
  
    console.log(this.formInicio.value.usuario);

  }
}
