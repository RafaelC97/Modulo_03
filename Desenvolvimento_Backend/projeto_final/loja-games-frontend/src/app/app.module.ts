import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/views/home/home.component';
import { CardComponent } from './components/shared/card/card.component';
import { ModalExclusaoComponent } from './components/shared/modal-exclusao/modal-exclusao.component';
import { CadastroJogoComponent } from './components/views/cadastro/cadastro-jogo/cadastro-jogo.component';
import { CadastroCategoriaComponent } from './components/views/cadastro/cadastro-categoria/cadastro-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    CardComponent,
    ModalExclusaoComponent,
    CadastroJogoComponent,
    CadastroCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
