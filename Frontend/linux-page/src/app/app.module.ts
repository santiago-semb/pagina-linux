import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ComandosComponent } from './comandos/comandos.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { VerComandoComponent } from './ver-comando/ver-comando.component';
import { VmComponent } from './ayuda/vm/vm.component';
import { DistribucionesComponent } from './ayuda/distribuciones/distribuciones.component';
import { AboutMeComponent } from './ayuda/about-me/about-me.component';
import { CrearComandoComponent } from './crear-comando/crear-comando.component';
import { FormsModule } from '@angular/forms';
import { VerTagComponent } from './ver-tag/ver-tag.component';
import { CrearTagComponent } from './crear-tag/crear-tag.component';
import { CarrouselHomeComponent } from './carrousel-home/carrousel-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ComandosComponent,
    AyudaComponent,
    VerComandoComponent,
    VmComponent,
    DistribucionesComponent,
    AboutMeComponent,
    CrearComandoComponent,
    VerTagComponent,
    CrearTagComponent,
    CarrouselHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
