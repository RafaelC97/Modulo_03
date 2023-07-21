import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compenents/views/home/home.component';
import { AdicionarAnimalComponent } from './compenents/views/animal/adicionar-animal/adicionar-animal.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'adicionar-animal',  component: AdicionarAnimalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
