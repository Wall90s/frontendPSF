import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemAnimaisComponent } from './components/views/animal/listagem-animais/listagem-animais.component';
import { AdicionarAnimalComponent } from './components/views/animal/adicionar-animal/adicionar-animal.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListagemPokemonsComponent } from './components/listagem-pokemons/listagem-pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemAnimaisComponent,
    AdicionarAnimalComponent,
    NavbarComponent,
    HomeComponent,
    ListagemPokemonsComponent
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
