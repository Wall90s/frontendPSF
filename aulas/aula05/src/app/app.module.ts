import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { OninitOndestroyComponent } from './components/views/oninit-ondestroy/oninit-ondestroy.component';
import { HomeComponent } from './components/views/home/home.component';
import { PromisesComponent } from './components/views/promises/promises.component';
import { ObservableComponent } from './components/views/observable/observable.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OninitOndestroyComponent,
    HomeComponent,
    PromisesComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
