import { Inject,Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Product } from '../shared/product';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  STORAGE_KEY = 'local_toProductList';
  prodList:Product[]=[];

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  storeOnLocalStorage(prod:Product){
    const currentTodoList = this.storage.get(this.STORAGE_KEY);
    currentTodoList.push(prod);
    this.storage.set(this.STORAGE_KEY, currentTodoList);

          console.log(this.storage.get(this.STORAGE_KEY));
  }

  retrieveFromLocalStorage():Product[]{
    return this.storage.get(this.STORAGE_KEY);
  }
}
