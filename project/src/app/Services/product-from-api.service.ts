import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../shared/product';
import { environment } from 'src/environments/environment';
import { Category } from '../shared/category';

@Injectable({
  providedIn: 'root'
})
export class ProductFromAPIService {

  productList:Product[]=[];
  constructor(private http: HttpClient) {
    this.GetProductsFromAPI().subscribe(
      (data)=> 
      {
        this.productList=data;
      });
   }

  GetProductsFromAPI():Observable<Product[]>
  {
    return (this.http.get<Product[]>(`${environment.URL}`));
  }

  GetProductByID(prdID: number): Observable <Product>{
    return (this.http.get<Product>(`${environment.URL}/${prdID}`));
  }

  GetCategoriesFromAPI():Observable<Category[]>
  {
    return (this.http.get<Category[]>(`${environment.CatURL}`));
  }

  getProduct(catID: number): Product[]
   {
    console.log('In function, CatID: ' + catID);
     let newProdList: Product[]=[];
     this.productList.filter((prod)=>{
     if(prod.CategoryID==catID)
     {
       newProdList.push(prod);
     }
    });
    return newProdList;
   }
}
