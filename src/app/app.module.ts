import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormRegistroComponent } from './components/form-registro/form-registro.component';
import { FormLoginComponent } from './components/form-login/form-login.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRegistroComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
