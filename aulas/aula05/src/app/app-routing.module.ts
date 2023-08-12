import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { OninitOndestroyComponent } from './components/views/oninit-ondestroy/oninit-ondestroy.component';
import { PromisesComponent } from './components/views/promises/promises.component';
import { ObservableComponent } from './components/views/observable/observable.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'oninit-ondestroy', component: OninitOndestroyComponent },
  { path: 'promise', component: PromisesComponent },
  { path: 'observable', component: ObservableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
