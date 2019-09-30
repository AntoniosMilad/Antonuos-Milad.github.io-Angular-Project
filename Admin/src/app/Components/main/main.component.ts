import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/Shared/product';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  prdList: Product[];
  selectProduct: Product;

  constructor(private productAPI: ProductService,
    private router: Router, public sanitizer: DomSanitizer) { }

  DeleteProd(prodID: number) {
    return this.productAPI.DeleteProduct(prodID)
      .subscribe(
        (data) => {
          console.log(prodID);
          location.reload();
        },
        (err) => {
          console.log(err);
        }
      );
  }

  
  ngOnInit() {
    this.productAPI.GetProductsFromAPI().subscribe(
      (data) => {
        this.prdList = data;
        console.log(this.prdList);
      },
      (err) => {
        console.log(err);
      });
  }
}
