import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { CadastroComponent } from './components/views/cadastro/cadastro.component';
import { LoginComponent } from './components/views/login/login.component';
import { ContatoComponent } from './components/views/contato/contato.component';
import { AddAnimalComponent } from './components/views/add-animal/add-animal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'add-animal', component: AddAnimalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
