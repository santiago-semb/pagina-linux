import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent {

  constructor(private router:Router){}

  mostrarCartelAyuda = (this.router.url == "/ayuda") ? true : false
}
