import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product';
import { ProductFromAPIService } from 'src/app/Services/product-from-api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  selectProd:Product[]=[];
  constructor(private productServ:ProductFromAPIService,
              private activated:ActivatedRoute,
              private backStep:Location,
              private localStorage:LocalStorageService) { }

  goBack(){
    this.backStep.back();
  }

  ngOnInit() {
   this.selectProd= this.localStorage.retrieveFromLocalStorage();
   return this.selectProd;
  }

}
