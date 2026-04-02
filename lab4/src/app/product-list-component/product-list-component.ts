import { Component, input, output } from '@angular/core';
import { ProductItemComponent } from '../product-item-component/product-item-component.js';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list-component',
  imports: [ProductItemComponent],
  template: `
    <div class="productsList">
    @if (products().length === 0) { Товаров нет }  
    @for (p of products(); track p.id) {
        <app-product-item-component [product]="p" (remove)="onRemove($event)" (like)="onLike($event)">

        </app-product-item-component>
      } 
    </div>
  `,
  styleUrl: './product-list-component.css'
})
export class ProductListComponent {
  products = input.required<Product[]>();
  removeProduct = output<number>();
  likeProduct = output<number>();

  onRemove(id: number) { this.removeProduct.emit(id); }
  onLike(id: number) { this.likeProduct.emit(id); }
}
