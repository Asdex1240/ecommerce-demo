import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  options: Option[] = [
    {
      name: 'Home',
      path: 'home'
    },
    {
      name: 'Catálogo',
      path: 'catalogo'
    },
    {
      name: 'Historia',
      path: 'historia'
    },
    {
      name: 'Contacto',
      path: 'contacto'
    }
  ]

}

interface Option {
  name: string,
  path: string
}
