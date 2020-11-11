import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { JogoService } from 'src/app/core/services/jogo.service';





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

  constructor(private _jogo:JogoService, private router:Router,
    private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    
    this.telaHeight=window.innerHeight;
    this._jogo.initParam();
  }

  iniciarJogo(){

    let usuario = this.formInicio.value.usuario;
    let nivel = this.formInicio.value.nivel;
    let cenario= this.formInicio.value.fase;    

    if (usuario === '' || nivel ==='' || cenario ===''){
      alert('Preencha todos os campos!')

      return false;      
    }

    this.router.navigate(['/Jogo'], {state: {usuario,nivel,cenario}});
   
  }
}
