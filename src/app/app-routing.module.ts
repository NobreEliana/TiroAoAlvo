import { NgModule, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { JogoComponent } from './view/jogo/jogo.component';
import { ResultadoComponent } from './view/resultado/resultado.component';



const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Jogo', component: JogoComponent },
  { path: 'Resultado', component: ResultadoComponent },
  { path: '**', redirectTo: 'Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
