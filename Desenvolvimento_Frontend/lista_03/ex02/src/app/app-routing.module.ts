import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { JogosComponent } from './components/views/jogos/jogos.component';
import { HitoriaComponent } from './components/views/hitoria/hitoria.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'jogos', component: JogosComponent},
  { path: 'historia', component: HitoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
