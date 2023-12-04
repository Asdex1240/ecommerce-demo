import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductosService } from 'src/app/services/productos.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {

  producto: Product | undefined

  constructor(private productoSvc: ProductosService, private activateRoute: ActivatedRoute, private location: Location){
    const id = parseInt(this.activateRoute.snapshot.paramMap.get('id') as string);
    
    this.producto = this.productoSvc.getProductById(id);
    console.log(this.producto)
  }

  volver(){
    this.location.back()
  }

  comprar(){

  }

}
