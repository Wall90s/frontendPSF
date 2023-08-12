import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { AdicionarAnimalComponent } from './components/views/animal/adicionar-animal/adicionar-animal.component';
import { ListagemPokemonsComponent } from './components/listagem-pokemons/listagem-pokemons.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adicionar-animal', component: AdicionarAnimalComponent },
  { path: 'pokemons', component: ListagemPokemonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
