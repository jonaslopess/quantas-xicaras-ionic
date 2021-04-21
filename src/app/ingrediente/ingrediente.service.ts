import { Injectable } from '@angular/core';

import { Ingrediente } from './ingrediente';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {

  private ingredientes : Ingrediente[]

  constructor() { 
    this.ingredientes = [
      new Ingrediente("Farinha", 0.5),
      new Ingrediente("Leite", 1),
      new Ingrediente("Açúcar", 0.8)
    ]
  }

  getIngredientes(){
    return this.ingredientes;
  }

  getIngrediente(i : number){
    return this.ingredientes[i];
  }

  addIngrediente(nome: string, regra_conversao: number){
    this.ingredientes.push(new Ingrediente(nome,regra_conversao))
  }

  editIngrediente(i : number, nome: string, regra_conversao: number){
    this.ingredientes[i].nome = nome;
    this.ingredientes[i].regra_conversao = regra_conversao;
  }

}
