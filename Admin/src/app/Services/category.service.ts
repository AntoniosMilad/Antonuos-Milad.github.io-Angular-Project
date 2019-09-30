import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../Shared/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  GetCategoriesFromAPI():Observable<Category[]>
  {
    return (this.http.get<Category[]>(`${environment.URL_Cat}`));
  }

  GetCategoryByID(CatID: number): Observable <Category>{
    return (this.http.get<Category>(`${environment.URL_Cat}/${CatID}`));
  }

  insertCategory(newCat: Category):Observable <any>{
    const httpOption= {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    })};
    return this.http.post<any>(`${environment.URL_Cat}`,newCat,httpOption);
  }

  DeleteCategory(CatID: number):Observable<any>{
    return this.http.delete<any>(`${environment.URL_Cat}/${CatID}`);
  }

  EditCategory(CatID:number,cat:Category):Observable<any>{
    return this.http.put<any>(`${environment.URL_Cat}/${CatID}`,cat);
  }
}
