import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, FormControl } from '@angular/forms'
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/Shared/product';
import { Category } from 'src/app/Shared/category';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  newPrd: Product;
  prof: FormGroup;
  ob: Object;
  error: string;
  fileUpload = { status: '', message: '', filePath: '' };
  f: File
  productimage
  categoryList:Category[];
  
  constructor(
    private productServ: ProductService,
    private router: Router,
    private fb: FormBuilder,
    private categoryServ: CategoryService
  ) {
    this.newPrd = new Product('Samsung', 60000, 5, 3, this.f, false);
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

  saveProduct() {
    // ev.preventDefault();
    let productInputs=this.prof.value
    productInputs.image1=this.productimage
    console.log(productInputs)
    this.productServ.insertProduct(productInputs)
      .subscribe(
        (data) => {
          console.log(JSON.stringify(data));
          this.router.navigate(['/showProduct']);
        },
        (err) => {
          console.log(err);
        });

    // const formData = new FormData();
    // formData.append('name', this.prof.get('name').value);
    // formData.append('prdImage', this.prof.get('prdImage').value);

    // this.productServ.upload(formData).subscribe(
    //   (res) => {
    //     this.fileUpload = res;
    //   },
    //   (err) => {
    //     this.error = err;
    //   }
    // );


  }

  ngOnInit() {
  }

}
