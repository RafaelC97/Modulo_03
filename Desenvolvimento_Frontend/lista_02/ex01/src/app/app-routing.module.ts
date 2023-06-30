import { Component, NgModule } from '@angular/core';
import { NgModel } from "@angular/forms";
import { Route, RouterModule, Routes } from "@angular/router";
import { FuncionariosComponent } from './views/funcionarios/funcionarios.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: '', component: FuncionariosComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
