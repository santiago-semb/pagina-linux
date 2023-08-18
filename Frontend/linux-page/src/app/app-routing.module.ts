import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ComandosComponent } from './comandos/comandos.component';
import { HomeComponent } from './home/home.component';
import { VmComponent } from './ayuda/vm/vm.component';
import { DistribucionesComponent } from './ayuda/distribuciones/distribuciones.component';
import { AboutMeComponent } from './ayuda/about-me/about-me.component';
import { VerComandoComponent } from './ver-comando/ver-comando.component';
import { CrearComandoComponent } from './crear-comando/crear-comando.component';
import { CrearTagComponent } from './crear-tag/crear-tag.component';

const routes: Routes = [
  {path:'ayuda', component: AyudaComponent},
  // AYUDA
  {path:'virtual-machine', component: VmComponent},
  {path:'distribuciones', component: DistribucionesComponent},
  {path:'about-me', component: AboutMeComponent},
  // 
  {path:'comandos', component: ComandosComponent},
  {path:'ver-comando/:nombre', component: VerComandoComponent},
  {path:'crear-comando', component: CrearComandoComponent},
  {path:'crear-tag', component: CrearTagComponent},
  {path:'home', component: HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
