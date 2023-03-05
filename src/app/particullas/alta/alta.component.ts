import { Component, OnInit } from '@angular/core';
import { Particula } from 'src/app/models/particula';
import { ParticulasService } from 'src/app/services/particulas.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
  public particula: [string, Particula];

  constructor(private servicio: ParticulasService) {
    this.particula =['00', {
      idparticula: 0,
      nombre: 'Particula 01',
      descripcion: 'hola soy una particula',
      tipo: 'Quart',
      subtipo: 'LLL',
      masa: '1234',
      carga: 'M',
      spin:'M',
      simbolo:'L',
      verificada: '111111'

     }]

  }
  public altaParticula() {

    this.servicio.postParticula(this.particula[1]).subscribe({
      next: (particula) => {alert("Alta efectuada"), console.log(particula[1]) },
    })
    }

  ngOnInit(){
  }

}
