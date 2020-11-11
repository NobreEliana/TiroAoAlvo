import { Type } from '@angular/core';

export class Alvo {
    constructor(public component: Type<any>,  public prop: AlvoProp){} 
}

export class AlvoProp{
    public positionX: number; 
    public positionY: number;
    public size: number; 
}
