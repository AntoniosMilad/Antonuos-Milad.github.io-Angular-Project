import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/Shared/product';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  selectProd:Product;
  productimage
  prof: FormGroup; 
  constructor(private activated : ActivatedRoute,
              private productServ: ProductService,
              private router:Router) { 
                this.prof = new FormGroup({
                  Name: new FormControl("product"),
                  IsDeleted:  new FormControl("false"),
                  CategoryID:  new FormControl("3"),
                  Price: new FormControl("20"),
                  Quantity: new FormControl("50"),
                  image1:  new FormControl(""),
                })
              }

  OnSelectFile(event) {
    console.log(event.target.files)
    if (event.target.files.length > 0) {
      this.productimage=event.target.files[0]

    }
  }

  saveChanges(prodID: number,selectProd:Product){
    this.productServ.EditProduct(prodID,selectProd)
    .subscribe(
      (data)=>{
        console.log(JSON.stringify(this.selectProd));
        this.router.navigate(['/showProduct']);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  ngOnInit() {
    const selectedProdByID= this.activated.snapshot.params['pid'];
    this.productServ.GetProductByID(selectedProdByID)
    .subscribe(
      (data)=>{
        console.log(data);
        this.selectProd=data;
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}
