import { Injectable, ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { AlvoComponent } from '../alvo/alvo.component';
import { AdType } from '../model/ad-type';

@Injectable({
  providedIn: 'root'
})
export class AlvoService {
  alvocomponentRef:ComponentRef<AlvoComponent>;

  listcomponentRef:ComponentRef<any>[];

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {this.listcomponentRef=[]; }

    private appendAlvoComponentToBody(adType: AdType){
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adType.component);
      const componentRef = componentFactory.create(this.injector);
      this.appRef.attachView(componentRef.hostView);

      const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

      document.querySelector(".jogo_content").appendChild(domElem);

      this.listcomponentRef.push(componentRef);

      this.alvocomponentRef = componentRef;
      this.alvocomponentRef.instance.pos=adType.pos;
      //this.alvocomponentRef.instance.childComponentType = adType;
    }
    
    private removeAlvoComponentFromBody(){

      this.appRef.detachView(this.alvocomponentRef.hostView);
      this.alvocomponentRef.destroy();
    }
    
    public add(adType: AdType){
      this.appendAlvoComponentToBody(adType);
      
    }
    
    public remove(){
      this.removeAlvoComponentFromBody();
    }
  
}
