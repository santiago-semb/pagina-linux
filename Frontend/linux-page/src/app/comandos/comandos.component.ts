import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comandos',
  templateUrl: './comandos.component.html',
  styleUrls: ['./comandos.component.css']
})
export class ComandosComponent implements OnInit {

  constructor(private api: ApiService, private router:Router){}

  comandos = []
  listar = []
  onoff = []

  ventanaInicial = false
  linkActive = false

  public cargando: boolean = true;
  public registros: any[] = [];

  ngOnInit(): void {
    (this.router.url != '/comandos') ? this.ventanaInicial = false : this.ventanaInicial = true
    this.obtenerRegistros()
  }

  obtenerRegistros() {
    this.api.getComandos().subscribe(
      (data) => {
        this.comandos = data
      },
      (error) => {
        console.error('Error al obtener los registros', error);
        this.cargando = false;
      }
    );
  }
  
}
