import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }
  products: Product[] = [
    {
      id: 1,
      img: '../../../assets/cosplays/naruto.png',
      title: 'Disfraz naruto',
      description: [
        'Disfraz de naruto para joven',
        'Talla chica',
        'Hecho a base de algodón',
        'Hecho en México'
      ],
      category: 'Cosplay',
      price: 300.00
    },
    {
      id: 2,
      img: '../../../assets/cosplays/chaqueta.jpg',
      title: 'Chaqueta anime',
      description: [
        'Chaqueta talla chica para joven',        
        'Talla chica',
        'Hecho a base de algodón',
        'Hecho en México'],
      category: 'Cosplay',
      price: 250.99
    },
    {
      id: 3,
      img: '../../../assets/cosplays/coneja.jpg',
      title: 'Disfraz para mujer',
      description: [
        'Disfraz para mujer joven',
        'Talla chica',
        'Hecho a base de algodón',
        'Hecho en México'
      ],
      category: 'Cosplay',
      price: 550.80
    },
    {
      id: 4,
      img: '../../../assets/cosplays/lobo.jpg',
      title: 'Mascara de lobo',
      description: [
        'Mascara de lobo para joven',
        'Talla chica',
        'Hecho a base de algodón',
        'Hecho en México'
    ],
      category: 'Cosplay',
      price: 150.50
    },
    {
      id: 5,
      img: '../../../assets/cosplays/pokemon.jpg',
      title: 'Disfraz para hombre',
      description: [
        'Disfraz de pokemon para hombre', 
        'Talla chica',
        'Hecho a base de algodón',
        'Hecho en México'],
      category: 'Cosplay',
      price: 700.00
    },
    {
      id: 6,
      img: '../../../assets/cosplays/uchiha.jpg',
      title: 'Tunica de naruto',
      description: [
        'Tunica de naruto para joven',
        'Talla chica',
        'Hecho a base de algodón',
        'Hecho en México'
      ],
      category: 'Cosplay',
      price: 760.50
    },
    {
      id: 7,
      img: '../../../assets/cosplays/wazon.jpg',
      title: 'Disfraz para hombre Batman',
      description: [
        'Disfraz para wazon para joven',
        'Talla chica',
        'Hecho a base de algodón',
        'Hecho en México'
      ],
      category: 'Cosplay',
      price: 550.80
    },
  ];

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
