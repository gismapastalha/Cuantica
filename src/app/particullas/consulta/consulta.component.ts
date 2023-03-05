import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Particula } from 'src/app/models/particula';
import { ParticulasService } from 'src/app/services/particulas.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  public particulas: [string, Particula[]];
 
  constructor(private servicio: ParticulasService, private router:Router, private rutaActiva: ActivatedRoute) {

    this.particulas = ['', []]

  }


  ngOnInit(){
    this.servicio.getParticulas().subscribe({
      //respuesta cuando se complete la petición
      next: (particulas) => {
      this.particulas = particulas
      console.log(particulas[1])
      },
      //respuesta en caso de error
      error: (error) => {
      alert("algo fué mal")
      console.log(error.error)
      }
      });
  }

}
