import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-tag',
  templateUrl: './ver-tag.component.html',
  styleUrls: ['./ver-tag.component.css']
})
export class VerTagComponent implements OnInit {

  constructor(private api: ApiService, private actRoute: ActivatedRoute){}

  descripciones = []
  d1 = ""
  d2 = ""

  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
    const nombre = params['nombre'];
      this.api.getTag(nombre).subscribe((tag) => {
        for(let i=0;i<2;i++){
          this.descripciones[`tag_${i}`] = tag[i].descripcion
        }
        if(this.descripciones['tag_0']){
          this.d1 = this.descripciones['tag_0']
        }
        if(this.descripciones['tag_1']){
          this.d2 = this.descripciones['tag_1']
        }
      })
  })
  }

  

}
