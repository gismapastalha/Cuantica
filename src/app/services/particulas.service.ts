import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Particula } from '../models/particula';


@Injectable({
  providedIn: 'root'
})
export class ParticulasService {
  public particulas: Particula[];

  constructor(private httpClient:HttpClient) {
    this.particulas = [];
  }
  public getParticulas():Observable<[string, Particula[]]>{
    const path = "https://alcyon-it.com/WEBSERVICES/quantum/consulta.php"
    return this.httpClient.get<[string, Particula[]]>(path)
   }
   public getParticula(id:string):Observable<[string, Particula]>  {
    const path = "https://alcyon-it.com/WEBSERVICES/quantum/consulta.php?id="

    return this.httpClient.get<[string, Particula]>(path+`${id}`)
  }
  public postParticula(particula: Particula): Observable<[string, string]> {
    const path = "https://alcyon-it.com/WEBSERVICES/quantum/alta.php" 
    return this.httpClient.post<[string, string]>(path, JSON.stringify(particula))
   }

}
