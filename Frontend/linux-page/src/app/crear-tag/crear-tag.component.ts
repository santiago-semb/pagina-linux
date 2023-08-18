import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Tag } from '../Model/Tag';

@Component({
  selector: 'app-crear-tag',
  templateUrl: './crear-tag.component.html',
  styleUrls: ['./crear-tag.component.css']
})
export class CrearTagComponent {

  nombreTag
  comandoTag
  descripcionTag

  constructor(private api: ApiService, private router: Router){}

  submit()
  {
    let tag = new Tag(this.nombreTag,this.comandoTag,this.descripcionTag)
    this.api.setTag(tag).subscribe()
    this.router.navigate(['comandos'])
  }

}
