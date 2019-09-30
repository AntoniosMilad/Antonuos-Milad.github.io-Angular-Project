import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Shared/category';
import { FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/Services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  newCat: Category;
  prof: FormGroup;
  ob: Object;
  error: string;
  fileUpload = {status: '', message: '', filePath: ''};

  constructor(private CategoryServ:CategoryService,
              private router:Router) {
                this.newCat=new Category(4,'tablets');
               }

  saveCategory() {
    // ev.preventDefault();
    console.log(JSON.stringify(this.newCat));

    this.CategoryServ.insertCategory(this.newCat)
    .subscribe(
      (data) => {
        console.log (JSON.stringify(data));
        this.router.navigate(['/showCategories']);
       },
      (err) => {console.log(err);
      });
    }

  ngOnInit() {
  }

}
