import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { CategoriesService } from 'src/app/services/categories.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private productosSvc: ProductosService, private categoriasSvc: CategoriesService){}

  products = this.productosSvc.products;
  categorias = this.categoriasSvc.categorias;
}
