import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConversorComponent } from './conversor/conversor.component';
import { ListaIngredientesComponent } from './ingrediente/lista-ingredientes/lista-ingredientes.component';
import { NovoIngredienteComponent } from './ingrediente/novo-ingrediente/novo-ingrediente.component';
import { EditaIngredienteComponent } from './ingrediente/edita-ingrediente/edita-ingrediente.component';
import { IngredienteService } from './ingrediente/ingrediente.service';

@NgModule({
  declarations: [
    AppComponent,
    ConversorComponent,
    ListaIngredientesComponent,
    NovoIngredienteComponent,
    EditaIngredienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [IngredienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
