import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Comando } from '../Model/Comando';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-comando',
  templateUrl: './crear-comando.component.html',
  styleUrls: ['./crear-comando.component.css']
})
export class CrearComandoComponent {

  nombreComando
  categoriaComando
  descripcionComando

  constructor(private api: ApiService, private router: Router){}

  submit()
  {
    let comando = new Comando(this.nombreComando,this.categoriaComando,this.descripcionComando)
    this.api.setComando(comando).subscribe()
    this.router.navigate(['comandos'])
  }

}
