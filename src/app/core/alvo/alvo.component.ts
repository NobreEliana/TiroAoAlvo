import { Component, OnInit } from '@angular/core';
import { AlvoProp } from '../model/alvo';
import { AlvoService } from '../services/alvo.service';


@Component({
  selector: 'app-alvo',
  templateUrl: './alvo.component.html',
  styleUrls: ['./alvo.component.less']
})
export class AlvoComponent implements OnInit {
  public prop: AlvoProp;
  id:number;

  constructor(public alvoService: AlvoService) { }

  ngOnInit() {
    this.alvoService.removeAutoAlvo(this.id);    
  }
}
