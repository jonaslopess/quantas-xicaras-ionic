import { Component, OnInit } from '@angular/core';

import { Ingrediente } from '../ingrediente/ingrediente';
import { IngredienteService } from '../ingrediente/ingrediente.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

	ingredientes : Ingrediente[]
  
	constructor(private ingredienteService : IngredienteService) { 
		this.ingredientes = ingredienteService.getIngredientes();
	}

	ngOnInit(): void {
	}

	onSubmit(form:any){
		console.log(form)
		
		let ingrediente : Ingrediente = this.ingredienteService.getIngrediente(
		form.value.ingrediente);

		console.log(ingrediente)

	}

}
