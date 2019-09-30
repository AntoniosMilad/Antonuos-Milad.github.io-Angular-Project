import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './Components/content/content.component';
import { SlideBarComponent } from './Components/slide-bar/slide-bar.component';
import { MainComponent } from './Components/main/main.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { ShowCategoriesComponent } from './Components/show-categories/show-categories.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { EditCategoryComponent } from './Components/edit-category/edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SlideBarComponent,
    MainComponent,
    AddProductComponent,
    EditProductComponent,
    ShowCategoriesComponent,
    AddCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
