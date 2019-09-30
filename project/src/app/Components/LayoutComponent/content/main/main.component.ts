import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/category';
import { ProductFromAPIService } from 'src/app/Services/product-from-api.service';
import { Product } from 'src/app/shared/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  categoryList:Category[];
  SelectedCategory: number;
  cartCount:number;

  prod:Product[]=[];
  constructor(private productServ:ProductFromAPIService,
              private router:Router) { 
                this.cartCount=0;
              }

  viewCart(prod:Product[]){
    this.router.navigate(['/viewCart']);
  }


  ngOnInit() {
    this.productServ.GetCategoriesFromAPI().subscribe(
      (data)=> 
      {
        this.categoryList =data;
        console.log(this.categoryList);
      },
      (err)=>
      {
        console.log(err);
      });
  }

}
