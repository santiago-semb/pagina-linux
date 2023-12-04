import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel-home',
  templateUrl: './carrousel-home.component.html',
  styleUrls: ['./carrousel-home.component.css']
})
export class CarrouselHomeComponent implements OnInit {

  ngOnInit(): void {

    this.carrouselOpacity()
  }
    carrouselOpacity(){
    // JavaScript para hacer que las imágenes cambien automáticamente
    document.addEventListener('DOMContentLoaded', function () {
        var imagenes = document.querySelectorAll('.imagen-cambiante-opacity');
        var index = 0;

        setInterval(function () {
            // Hacer que la imagen actual desaparezca
            imagenes[index].classList.remove('aparecer');

            // Calcular el índice de la siguiente imagen
            index = (index + 1) % imagenes.length;

            // Hacer que la siguiente imagen aparezca
            imagenes[index].classList.add('aparecer');
        }, 5000); // Cambia el tiempo (5000ms = 5 segundos) según tus preferencias
    });
}
    
}
