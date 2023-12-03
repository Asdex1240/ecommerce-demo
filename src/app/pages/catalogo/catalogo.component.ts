import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {

  constructor(private categoriaSvc: CategoriesService, private router: Router){}

  categorias = this.categoriaSvc.categorias;

  navCategory(path: string){
    this.router.navigateByUrl(path)
  }

}
