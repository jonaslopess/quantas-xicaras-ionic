import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConversorComponent } from './conversor/conversor.component';
import { EditaIngredienteComponent } from './ingrediente/edita-ingrediente/edita-ingrediente.component';
import { ListaIngredientesComponent } from './ingrediente/lista-ingredientes/lista-ingredientes.component';
import { NovoIngredienteComponent } from './ingrediente/novo-ingrediente/novo-ingrediente.component';

const routes: Routes = [
  {path:"", component:ConversorComponent},
  {path:"ingredientes", component:ListaIngredientesComponent},
  {path:"novo-ingrediente", component:NovoIngredienteComponent},
  {path:"edita-ingrediente/:id", component:EditaIngredienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
