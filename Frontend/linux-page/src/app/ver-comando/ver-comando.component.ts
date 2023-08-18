import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-comando',
  templateUrl: './ver-comando.component.html',
  styleUrls: ['./ver-comando.component.css']
})
export class VerComandoComponent implements OnInit{

   constructor(private api: ApiService, private actRoute: ActivatedRoute){}

  nombreComando = ""
  descripcionComando = ""

  ngOnInit(): void {

    this.actRoute.params.subscribe(params => {
      const nombre = params['nombre'];
      this.api.getComando(nombre).subscribe((comandos) => {
        this.nombreComando = comandos[0].nombre
        this.descripcionComando = comandos[0].descripcion
      })

      this.api.getTag(nombre).subscribe((tag) => {
        this.tags2 = tag;
      })
  });

    

  }

  tags2 = []


}
