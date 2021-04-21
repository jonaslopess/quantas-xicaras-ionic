import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Ingrediente } from '../ingrediente';
import { IngredienteService } from '../ingrediente.service';

@Component({
  selector: 'app-edita-ingrediente',
  templateUrl: './edita-ingrediente.component.html',
  styleUrls: ['./edita-ingrediente.component.css']
})
export class EditaIngredienteComponent implements OnInit {

  id : number = 0
  inscricao? : Subscription
  ingrediente : any
  
  constructor(
    private ingredienteService : IngredienteService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params) => {
        this.id = params['id']
        this.ingrediente = this.ingredienteService.getIngrediente(this.id);
        if(this.ingrediente == null){
          this.router.navigate(['']);
        }

      } 
    )
  }

  onSubmit(form:any){
    let nome : string = ''
    let regra_conversao : number = 0

    nome = form.value.nome
    regra_conversao = Number(form.value.regra)

    this.ingredienteService.editIngrediente(this.id,nome,regra_conversao)

  }

}
