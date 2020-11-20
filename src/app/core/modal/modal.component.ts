import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { Mensagem } from '../model/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  mensagem:Mensagem;
  resultado:number=50;


  constructor( private modalService:ModalService, private el:ElementRef) { }
  ngOnInit() {

  setTimeout(() => {
    let modalSize=document.querySelector(".modal-dialog").clientWidth;

    this.resultado = 50-((modalSize * 100 / window.innerWidth) / 2);
    
  }, 2); 
  
    
  }

  removeModal(){
    this.modalService.remove();
  }

}
