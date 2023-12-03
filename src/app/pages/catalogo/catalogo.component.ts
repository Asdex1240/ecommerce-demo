import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {

  constructor(private categoriaSvc: CategoriesService){}

  categorias = this.categoriaSvc.categorias

}
