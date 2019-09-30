import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Shared/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  selectCat:Category;
  constructor(private activated : ActivatedRoute,
              private categoryServ:CategoryService,
              private router:Router) { }

  saveChanges(CatID: number,selCat:Category){
    this.categoryServ.EditCategory(CatID,selCat)
    .subscribe(
      (data)=>{
        console.log(JSON.stringify(this.selectCat));
        this.router.navigate(['/showCategories']);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  ngOnInit() {
    const selectedCatByID= this.activated.snapshot.params['cid'];
    this.categoryServ.GetCategoryByID(selectedCatByID)
    .subscribe(
      (data)=>{
        console.log(data);
        this.selectCat=data;
      },
      (err)=>{
        console.log(err);
      }
    );
  }

}
