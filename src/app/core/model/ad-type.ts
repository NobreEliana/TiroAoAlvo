import { Type, ComponentRef } from '@angular/core';


export class AdType {
    constructor(public component:Type<any>, public pos:any){

    }
}

export class CtType {
    constructor(public component:ComponentRef<any>, public id:any){

    }
}
