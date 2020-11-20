import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { Mensagem } from '../model/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  mensagem:Mensagem;


  constructor( private modalService:ModalService) { }

  ngOnInit() {
  }

  removeModal(){
    this.modalService.remove();
  }

}
