import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from './particullas/alta/alta.component';
import { ConsultaComponent } from './particullas/consulta/consulta.component';
import { DetalleComponent } from './particullas/detalle/detalle.component';
import { NotfoundComponent} from './plantillas/notfound/notfound.component';

const routes: Routes = [
  { path: 'particulas', component: ConsultaComponent},
  { path: 'particulas/alta', component: AltaComponent},
  { path: 'particulas/:id', component: DetalleComponent},
  { path: '**', component: NotfoundComponent}
  //{ path: '**', pathMatch: 'full', redirectTo: 'notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
