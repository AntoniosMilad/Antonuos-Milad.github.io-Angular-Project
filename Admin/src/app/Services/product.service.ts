import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Shared/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  GetProductsFromAPI():Observable<Product[]>
  {
    return (this.http.get<Product[]>(`${environment.URL}`));
  }

  GetProductByID(prdID: number): Observable <Product>{
    return (this.http.get<Product>(`${environment.URL}/${prdID}`));
  }

  insertProduct(newProd):Observable <any>{
    const httpOption= {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    })};
    const formdata:FormData=new FormData()
    formdata.append("Name",newProd.Name)
    formdata.append("IsDeleted",newProd.IsDeleted)
    formdata.append("CategoryID",newProd.CategoryID.toString())
    formdata.append("Price",newProd.CategoryID.toString())
    formdata.append("Quantity",newProd.Quantity.toString())
    formdata.append("image1",newProd.image1)
    console.log(formdata)
    return this.http.post<any>(`${environment.URL}`,formdata);
  }

  DeleteProduct(prodID: number):Observable<any>{
    return this.http.delete<any>(`${environment.URL}/${prodID}`);
  }

  EditProduct(prodID:number,prod:Product):Observable<any>{
    return this.http.put<any>(`${environment.URL}/${prodID}`,prod);
  }
}