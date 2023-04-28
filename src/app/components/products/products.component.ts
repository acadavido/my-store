import { Component } from '@angular/core';
import { Product } from 'src/app/models/model.product';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ){
    this.myShoppingCart = storeService.getShoppingCart()
  }

  ngOnInit():void{
    this.productsService.getAllProducts()
    .subscribe(data=>{
      this.products = data
    })
  }

  onAddToShoppingCart (product: Product){
    this.storeService.addProduct(product)
    this.total=this.storeService.getTotal()
  }
}
