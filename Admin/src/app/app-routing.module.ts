import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { MainComponent } from './Components/main/main.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { ShowCategoriesComponent } from './Components/show-categories/show-categories.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { EditCategoryComponent } from './Components/edit-category/edit-category.component';

const routes: Routes = [
  {path:'showProduct',component:MainComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'edit/:pid',component: EditProductComponent},
  {path:'showCategories',component:ShowCategoriesComponent},
  {path:'addCategory',component:AddCategoryComponent},
  {path: 'editCat/:cid',component:EditCategoryComponent},
  {path: '',redirectTo: '/showProduct',pathMatch:'full'}
  //{path: '**',component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
