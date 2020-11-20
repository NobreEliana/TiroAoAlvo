import { Injectable, ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef, Type } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { Modal, Mensagem } from '../model/modal';
import { CtType } from '../model/ad-type';


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalcomponentRef:ComponentRef<ModalComponent>;
  listComponentRef:CtType[];
  counter:number = 0;
  

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {this.listComponentRef= []; }

  private appendModal(type:Modal){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(type.component);
    const componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    document.querySelector("body").appendChild(domElem);
    
    this.modalcomponentRef = componentRef;
    this.modalcomponentRef.instance.mensagem = type.mensagem;

    this.listComponentRef.push(new CtType(this.modalcomponentRef,this.counter));
    this.counter++;
    if(this.listComponentRef.length > 1 ){
      let componentRef = this.listComponentRef.shift();
      this.appRef.detachView(componentRef.component.hostView);
      componentRef.component.destroy();
    }
    
  }

  private removeModal(){
    this.appRef.detachView(this.modalcomponentRef.hostView);
    this.modalcomponentRef.destroy();
  }

  public add(type:Modal){    
    this.appendModal(type);
  }

  public remove(){
    this.removeModal();
  }

}
