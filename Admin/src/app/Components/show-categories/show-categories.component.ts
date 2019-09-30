import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Shared/category';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-show-categories',
  templateUrl: './show-categories.component.html',
  styleUrls: ['./show-categories.component.css']
})
export class ShowCategoriesComponent implements OnInit {

  CatList:Category[];

  constructor(private CategoryAPI:CategoryService,
              private router:Router) { }

  DeleteCat(CatID: number) {
  return this.CategoryAPI.DeleteCategory(CatID)
    .subscribe(
      (data) => {
        console.log(CatID);
        location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
}


ngOnInit() {
  this.CategoryAPI.GetCategoriesFromAPI().subscribe(
    (data) => {
      this.CatList = data;
      console.log(this.CatList);
    },
    (err) => {
      console.log(err);
    });
}

}
