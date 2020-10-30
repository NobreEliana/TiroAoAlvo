import { Component, OnInit, ViewChild, ComponentRef, ComponentFactoryResolver, Type } from '@angular/core';
import { InsertDirective } from './insert.directive';
import { AdType } from './ad-type';
import { AlvoComponent } from '../alvo/alvo.component';

@Component({
  selector: 'app-ad-alvo',
  templateUrl: './ad-alvo.component.html',
  styleUrls: ['./ad-alvo.component.less']
})
export class AdAlvoComponent implements OnInit {

  @ViewChild(InsertDirective, {static:true} ) appInsert:InsertDirective;

  private componentRef:ComponentRef<any>;
  public childComponentType: Type<any>;

  public adType:AdType;

  constructor(private resolver:ComponentFactoryResolver) {
    this.adType= new AdType(AlvoComponent);
   }

  ngOnInit() {
    this.loadComponent();

  }

  loadComponent(){
    const componentFactory = this.resolver.resolveComponentFactory(this.adType.component);

    const viewContainerRef= this.appInsert.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent<AlvoComponent>(componentFactory);


  }
}
