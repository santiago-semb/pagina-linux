import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public constructor(private api:ApiService, private router:Router){}

  busqueda = ""
  comandosArr = []

  ngOnInit(): void {
    
  }

  submit()
  {
    this.api.getComandos().subscribe((comandos) => {
      this.comandosArr = comandos
      for(let i=0; i<this.comandosArr.length; i++){
        if(this.comandosArr[i].nombre == this.busqueda){
          this.router.navigate(['ver-comando/'+this.busqueda])
          this.busqueda = ""
          break
        }
      }
    })
  }

  enter()
  {
    document.addEventListener("DOMContentLoaded", function() {
      const form = document.querySelector("form");
      const inputField = document.getElementById("buscador");
    
      inputField.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
          event.preventDefault(); // Evitar el envío predeterminado del formulario
          form.submit(); // Enviar el formulario
        }
      });
    });
    
  }

  

}
