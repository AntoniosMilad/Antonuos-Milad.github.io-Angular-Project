import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ProductFromAPIService } from 'src/app/Services/product-from-api.service';
import { Product } from 'src/app/shared/product';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  productList: Product[]=[];
  newProdList:Product[];
  @Input() selectedCatIDFrmMain: number;

  constructor(private productAPIService:ProductFromAPIService,
              private router:Router,
              private localStorage:LocalStorageService) { 
              }
              
              
  ngOnChanges(changes: SimpleChanges): void {
    this.newProdList = this.productAPIService.getProduct(this.selectedCatIDFrmMain);
  }

  shoppingCart(prod:Product){
    console.log(prod);
    this.localStorage.storeOnLocalStorage(prod);
  }
  
  ngOnInit() {
    this.productAPIService.GetProductsFromAPI().subscribe(
      (data)=> 
      {
        this.newProdList=data;
        console.log(this.newProdList);
      },
      (err)=>
      {
        console.log(err);
      });
  }
}
