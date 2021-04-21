import { Component, OnInit } from '@angular/core';

import { IngredienteService } from '../ingrediente.service';

@Component({
  selector: 'app-novo-ingrediente',
  templateUrl: './novo-ingrediente.component.html',
  styleUrls: ['./novo-ingrediente.component.css']
})
export class NovoIngredienteComponent implements OnInit {

  constructor(private ingredienteService : IngredienteService) { }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    let nome : string = ''
    let regra_conversao : number = 0

    nome = form.value.nome
    regra_conversao = Number(form.value.regra)

    this.ingredienteService.addIngrediente(nome,regra_conversao)

  }

}
