import { Type } from '@angular/core';

export class Modal {
    constructor(public component:Type<any>, public mensagem:Mensagem){

    }
}

export class Mensagem{
    constructor(public titulo:string, public texto:string, public cancelarOn:boolean){}
    
}