import { Component, OnInit } from '@angular/core';

import { Ingrediente } from '../ingrediente/ingrediente';
import { IngredienteService } from '../ingrediente/ingrediente.service';
import { Unidade } from './unidade';
import { UnidadeService } from './unidade.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

	ingredientes? : Ingrediente[]
	unidades? : Unidade[]
	valorConvertido? : string
  
	constructor(
		private ingredienteService : IngredienteService,
		private unidadeService : UnidadeService
	) {

	}

	ngOnInit(): void {
		this.ingredientes = this.ingredienteService.getIngredientes()
		this.unidades = this.unidadeService.getUnidades()
		this.valorConvertido = "Insira a medida a ser convertida."
	}

	onSubmit(form:any){
		let unidade_entrada : any = this.unidadeService.getUnidade(
			Number(form.value.unidade_entrada)
		)
		let unidade_saida : any = this.unidadeService.getUnidade(
			Number(form.value.unidade_saida)
		)
		let quantidade_entrada : number = Number(form.value.quantidade_entrada)
    	let regra_conversao : number = this.ingredienteService.getIngrediente(form.value.ingrediente).regra_conversao
		
		if(unidade_entrada && unidade_saida){
			this.valorConvertido = unidade_saida.converter(unidade_entrada,quantidade_entrada,regra_conversao)
		} else {
			alert("Há algum erro no sistema...")
		}
		
	}

}
