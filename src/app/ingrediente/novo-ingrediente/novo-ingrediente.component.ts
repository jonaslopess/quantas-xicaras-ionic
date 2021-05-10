import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IngredienteService } from '../ingrediente.service';

@Component({
  selector: 'app-novo-ingrediente',
  templateUrl: './novo-ingrediente.component.html',
  styleUrls: ['./novo-ingrediente.component.css']
})
export class NovoIngredienteComponent implements OnInit {

  constructor(
    private ingredienteService : IngredienteService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    let nome : string = form.value.nome
    let regra : number = Number(form.value.regra)
    let img : string = form.value.img
    if(!img)
      this.ingredienteService.addIngrediente(nome,regra,'../../assets/pacote.png')
    else
      this.ingredienteService.addIngrediente(nome,regra,'../../assets/pacote.png')
    this.router.navigate(['/ingredientes']);

  }

}
