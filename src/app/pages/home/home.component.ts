import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private productosSvc: ProductosService, private categoriasSvc: CategoriesService,private router: Router){}

  products = this.productosSvc.products;
  categorias = this.categoriasSvc.categorias;

  nav(path: string){
    this.router.navigateByUrl(path)
  }


}
