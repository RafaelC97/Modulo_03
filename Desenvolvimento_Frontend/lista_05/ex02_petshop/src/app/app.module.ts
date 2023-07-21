import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compenents/views/home/home.component';
import { ListagemAnimaisComponent } from './compenents/views/animal/listagem-animais/listagem-animais.component';
import { AdicionarAnimalComponent } from './compenents/views/animal/adicionar-animal/adicionar-animal.component';
import { NavbarComponent } from './compenents/shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListagemAnimaisComponent,
    AdicionarAnimalComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
