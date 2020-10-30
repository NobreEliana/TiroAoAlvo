import { Injectable, ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { AdAlvoComponent } from './ad-alvo/ad-alvo.component';
import { Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlvoService {
  alvocomponentRef:ComponentRef<AdAlvoComponent>

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }

    private appendAlvoComponentToBody(adType: Type<any>){
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AdAlvoComponent);
      const componentRef = componentFactory.create(this.injector);
      this.appRef.attachView(componentRef.hostView);

      const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

      document.body.appendChild(domElem);

      this.alvocomponentRef = componentRef;
      this.alvocomponentRef.instance.childComponentType = adType;
    }
    
    private removeAlvoComponentFromBody(){
      this.appRef.detachView(this.alvocomponentRef.hostView);
      this.alvocomponentRef.destroy();
    }
    
    public add(componentType: Type<any>){
      this.appendAlvoComponentToBody(componentType);
      
    }
    
    public remove(){
      this.removeAlvoComponentFromBody();
    }
  
}
