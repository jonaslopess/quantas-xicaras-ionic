import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


import { Ingrediente } from '../ingrediente';
import { IngredienteService } from '../ingrediente.service';

@Component({
  selector: 'app-edita-ingrediente',
  templateUrl: './edita-ingrediente.component.html',
  styleUrls: ['./edita-ingrediente.component.css']
})
export class EditaIngredienteComponent implements OnInit {

  id : number = 0
  ingrediente : any

  imagePath : string = ''

  constructor(
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private ingredienteService : IngredienteService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.ingrediente = this.ingredienteService.getIngrediente(this.id)
    if(this.ingrediente == null){
      this.router.navigate([''])
    }
    this.imagePath = this.ingrediente.img
  }

  onSubmit(form:any){
    let nome : string = form.value.nome
    let regra : number = Number(form.value.regra)
    let img : string = this.imagePath
    this.ingredienteService.editIngrediente(this.id, nome,regra,img)
    this.router.navigate(['/ingredientes']);
  }

  pickImage(sourceType : any){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: sourceType,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 40,
      targetHeight: 40
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      this.imagePath = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  async selectImage(){
    const actionSheet = await this.actionSheetController.create({
      header: "Seleciona a fonte da imagem",
      buttons: [{
        text: 'Carregue da galeria',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use a c??mera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

}