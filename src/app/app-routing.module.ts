import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'historia', component: HistoriaComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'productos/:categoria', component: ProductsComponent},
  {path: 'producto/:id', component: ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
