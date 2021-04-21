import { Component, OnInit } from '@angular/core';

import { Ingrediente } from '../ingrediente/ingrediente';
import { IngredienteService } from '../ingrediente/ingrediente.service';
import { Unidade } from './unidade';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

	ingredientes? : Ingrediente[]
	unidades? : Unidade[]
	valorConvertido? : string
  
	constructor(private ingredienteService : IngredienteService) { 
		
	}

	ngOnInit(): void {
		this.ingredientes = this.ingredienteService.getIngredientes();
		this.unidades = [
			new Unidade(1,"grama(s)", -1),
			new Unidade(2,"mililitro(s)", 1),
			new Unidade(3,"xícara(s) (240ml)", 240),
			new Unidade(4,"colher(es) de sopa (15ml)", 15),
			new Unidade(5,"colher(es) de chá (5ml)", 5)
		]
		this.valorConvertido = "Insira a medida a ser convertida."
	}

	onSubmit(form:any){
		let unidade_entrada : any = this.getUnidade(
			Number(form.value.unidade_entrada)
		)
		let unidade_saida : any = this.getUnidade(
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

	getUnidade(id:number){
		if(this.unidades == undefined)
			return null
		for(let u of this.unidades){
			if(u.id == id){
				return u;
			}
		}
		return null
	}

}
