import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaComponent } from './particullas/alta/alta.component';
import { DetalleComponent } from './particullas/detalle/detalle.component';
import { ConsultaComponent } from './particullas/consulta/consulta.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { NavbarComponent } from './plantillas/navbar/navbar.component';
import { NotfoundComponent } from './plantillas/notfound/notfound.component';
import { ParticulasService } from './services/particulas.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AltaComponent,
    DetalleComponent,
    ConsultaComponent,
    HeaderComponent,
    NavbarComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ParticulasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
