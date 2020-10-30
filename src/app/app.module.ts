import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { JogoComponent } from './view/jogo/jogo.component';
import { ResultadoComponent } from './view/resultado/resultado.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 import { library } from '@fortawesome/fontawesome-svg-core';
 import { far } from '@fortawesome/free-regular-svg-icons';
 import { fas } from '@fortawesome/free-solid-svg-icons';
 import { fab } from '@fortawesome/free-brands-svg-icons';
 import { ReactiveFormsModule } from '@angular/forms';
import { AdAlvoComponent } from './core/ad-alvo/ad-alvo.component';
import { InsertDirective } from './core/ad-alvo/insert.directive';
import { AlvoComponent } from './core/alvo/alvo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JogoComponent,
    ResultadoComponent,
    AdAlvoComponent,
    InsertDirective,
    AlvoComponent
  ],
  imports: [
    AppRoutingModule,
    FontAwesomeModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers:[],
  entryComponents:[AlvoComponent, AdAlvoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    library.add(far, fas, fab);

  }
 }
