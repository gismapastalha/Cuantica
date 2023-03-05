import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Particula } from 'src/app/models/particula';
import { ParticulasService } from 'src/app/services/particulas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  //public particula:Particula
  public particula: [string, Particula];


  particula_color = ['colorpink', 'colorgreen', 'colororange']

  constructor(private servicio: ParticulasService, private ruta:ActivatedRoute) {
    this.particula =['00', {
      idparticula: 0,
      nombre: 'Pelicula 01',
      descripcion: 'xhfhdf',
      tipo: 'Buand',
      subtipo: 'assets/img/sinportada.jpg',
      masa: 'ghdfghdf',
      carga: 'M',
      spin:'hdfh',
      simbolo:'gh',
      verificada: 'ghfgh'

     }]


   }

  ngOnInit() {
    this.ruta.params.subscribe(params => {
      console.log(params['id'])
      this.servicio.getParticula(params['id']).subscribe({
        next: (particula) => {this.particula = particula
          },
        error: (error) => {
          alert("algo fué mal")
          console.log(error.error)
          }

      })

      })

  }


}
