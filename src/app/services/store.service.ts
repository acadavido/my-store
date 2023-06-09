import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/model.product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart: Product[] = [];

  constructor() { }

  getShoppingCart(){
    return this.myShoppingCart;
  }
  addProduct (product: Product){
    this.myShoppingCart.push(product);
  }
  getTotal(){
     return this.myShoppingCart.reduce((sum, item)=> sum + item.price, 0)
  }
}
