import { Injectable, ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef, Type } from '@angular/core';
import { AlvoComponent } from '../alvo/alvo.component';
import { CtType } from '../model/ad-type';
import { Alvo } from '../model/alvo';
import { VidaService } from './vida.service';
import { Vida } from '../model/vida';

@Injectable({
  providedIn: 'root'
})
export class AlvoService {
  alvocomponentRef:ComponentRef<AlvoComponent>;
  listcomponentRef:CtType[];
  counter:number=0;
  timeOut:any;
  levelTime:number;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private vidaService: VidaService) {this.listcomponentRef=[]; }

    private appendAlvoComponentToBody(adType: Alvo){
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adType.component);
      const componentRef = componentFactory.create(this.injector);
      this.appRef.attachView(componentRef.hostView);

      const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

      document.querySelector(".jogo_content").appendChild(domElem);
      
      this.alvocomponentRef = componentRef; 
      this.alvocomponentRef.instance.prop=adType.prop;
      this.alvocomponentRef.instance.id= this.counter;

      this.listcomponentRef.push(new CtType(this.alvocomponentRef, this.counter));
      this.counter++;
    }

    
    private removeAlvoComponentFromBody(_id:number):any{
      let _index;
      let componentMap = this.listcomponentRef.map((item, index) => {
        if(item.id == _id) {
          _index = index;
          return {index, component: item.component};
        }})[_index];
      if (componentMap === undefined) return false;
      
      
      this.appRef.detachView(componentMap.component.hostView);
      componentMap.component.destroy();

      this.listcomponentRef.splice(componentMap.index, 1);
      return true;
    }
    
    public spawningAlvo(adType: Alvo) {
      this.appendAlvoComponentToBody(adType);
      
    }
    
    public removeById(_id:number):any{
      return this.removeAlvoComponentFromBody(_id);
    }    
  
    public removeByIndex(_index:number){
      let componentRef = this.listcomponentRef[_index];
      this.listcomponentRef.splice(_index, 1);

      this.appRef.detachView(componentRef.component.hostView);
      componentRef.component.destroy();

    }

    public removeAutoAlvo(id: number){
      console.log(this.levelTime);
      this.timeOut= setTimeout(()=>{
        let thisRemove = this.removeById(id);
        if(thisRemove)
        this.removeVida();
        
        
      },this.levelTime);
    }

    removeVida(){
      this.vidaService.remove();
      this.vidaService.vida--;
    }

}
