import { ClientesService } from './clientes.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';
import {CommonModule} from '@angular/common';
import {HttpClientModule}from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { ClientesComponent } from './Componentes/clientes/clientes.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [HttpClientModule,ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
