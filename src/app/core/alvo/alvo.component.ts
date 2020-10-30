import { Component, OnInit } from '@angular/core';
import { AlvoService } from '../services/alvo.service';

@Component({
  selector: 'app-alvo',
  templateUrl: './alvo.component.html',
  styleUrls: ['./alvo.component.less']
})
export class AlvoComponent implements OnInit {
  pos:any;

  constructor( private alvoService:AlvoService) { }

  ngOnInit() {

    
  }

  onclick($event){
    console.log($event);
    this.alvoService.remove();
  }
}
