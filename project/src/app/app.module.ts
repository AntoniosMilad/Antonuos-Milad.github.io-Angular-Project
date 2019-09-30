import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './Components/LayoutComponent/content/content.component';
import { FooterComponent } from './Components/LayoutComponent/footer/footer.component';
import { MainComponent } from './Components/LayoutComponent/content/main/main.component';
import { HeaderComponent } from './Components/LayoutComponent/header/header.component';
import { ShowProductComponent } from './Components/LayoutComponent/content/show-product/show-product.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    MainComponent,
    HeaderComponent,
    ShowProductComponent,
    NotFoundPageComponent,
    ShoppingCartComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
