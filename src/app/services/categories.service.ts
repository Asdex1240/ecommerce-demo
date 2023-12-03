import { Injectable } from '@angular/core';
import { Categoria } from 'src/app/models/categories.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }
  categorias: Categoria[] = [
    {
      img: '../../../assets/categorias/hombre-cosplay.jpeg',
      name: 'Hombre cosplay',
      path: '#'
    },
    {
      img: '../../../assets/categorias/mujer-cosplay.jpeg',
      name: 'Mujer cosplay',
      path: '#'
    },
    {
      img: '../../../assets/categorias/combo-cosplay.jpeg',
      name: 'Combo cosplay',
      path: '#'
    },
    {
      img: '../../../assets/categorias/pareja-cosplay.jpeg',
      name: 'Pareja cosplay',
      path: '#'
    },
  ];
}
