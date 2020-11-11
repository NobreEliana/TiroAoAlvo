import { Injectable, ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { AlvoComponent } from '../alvo/alvo.component';
import { CtType } from '../model/ad-type';
import { Alvo } from '../model/alvo';
import { VidaComponent } from '../vida/vida.component';
import { Vida } from '../model/vida';

@Injectable({
  providedIn: 'root'
})
export class VidaService {
  vidacomponentRef:ComponentRef<VidaComponent>;
  listcomponentRef:CtType[];
  counter:number=0;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {this.listcomponentRef=[]; }

    private appendVida(type: Vida){
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(type.component);
      const componentRef = componentFactory.create(this.injector);
      this.appRef.attachView(componentRef.hostView);

      const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

      document.querySelector(".vidas").appendChild(domElem);
      
      this.vidacomponentRef = componentRef; 
      
      this.listcomponentRef.push(new CtType(this.vidacomponentRef, this.counter));
      this.counter++;
    }

    private removeVida(){
      let componentRef = this.listcomponentRef.shift();
      this.appRef.detachView(componentRef.component.hostView);
      componentRef.component.destroy();
    }
    
    public add(type: Vida){
      this.appendVida(type);
    }


    public remove(){
      this.removeVida()
    }
}
