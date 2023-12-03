import { CUSTOM_ELEMENTS_SCHEMA ,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { register } from 'swiper/element/bundle';
import { ProductsComponent } from './pages/products/products.component';
import { ProductoComponent } from './pages/producto/producto.component';


register()

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CatalogoComponent,
    HistoriaComponent,
    ContactoComponent,
    ProductsComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
