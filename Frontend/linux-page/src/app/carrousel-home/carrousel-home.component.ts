import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel-home',
  templateUrl: './carrousel-home.component.html',
  styleUrls: ['./carrousel-home.component.css']
})
export class CarrouselHomeComponent implements OnInit {

  ngOnInit(): void {
     // botones siguiente y anterior
     let go = document.getElementById("go")
     let back = document.getElementById("back")
 
     let primera = document.getElementsByClassName("primera") 

     carrousel(primera)   
     
     function carrousel(marca)
     {
         let contador = 0;
         let num = 0
 
         go.addEventListener("click", () => {     
         while(contador < marca.length && num <marca.length-1)
         {
             marca[num].style.opacity = "0"
             num++  
             contador++
             break;
         }
         if(num < marca.length)
         {
             marca[num].style.opacity = "100"
         }
     })
     
     back.addEventListener("click", () => {
         while(num < marca.length && num > 0)
         {
             marca[num].style.opacity = "0"
             num--
             contador--
             break;
         }
         if(num < marca.length)
         {
             marca[num].style.opacity = "100"
         }
     })
     }
    }
    
}
