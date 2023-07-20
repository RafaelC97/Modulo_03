import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListagemPokemonComponent } from './components/listagem-pokemon/listagem-pokemon.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'pokemon', component: ListagemPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
