import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { ListagemProdutosComponent } from './components/views/produto/listagem-produtos/listagem-produtos.component';
import { AdicionarProdutoComponent } from './components/views/produto/adicionar-produto/adicionar-produto.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'listagem-produtos', component: ListagemProdutosComponent},
  { path: 'adicionar-produto', component: AdicionarProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }