import { Component, OnInit } from '@angular/core';

import { Ingrediente } from '../ingrediente';
import { IngredienteService } from '../ingrediente.service';

@Component({
  selector: 'app-lista-ingredientes',
  templateUrl: './lista-ingredientes.component.html',
  styleUrls: ['./lista-ingredientes.component.css']
})
export class ListaIngredientesComponent implements OnInit {

  ingredientes : Ingrediente[] 
  
  constructor(private ingredienteService : IngredienteService) {
    this.ingredientes = this.ingredienteService.getIngredientes()
   }

  ngOnInit(): void {
    
  }

}
