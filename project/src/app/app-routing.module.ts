import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowProductComponent } from './Components/LayoutComponent/content/show-product/show-product.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import { MainComponent } from './Components/LayoutComponent/content/main/main.component';

const routes: Routes = [
  {path: 'home',component: MainComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'about',component: AboutComponent},
  {path:'viewCart',component:ShoppingCartComponent},
  {path: '',redirectTo: '/home',pathMatch:'full'},
  {path: '**',component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
