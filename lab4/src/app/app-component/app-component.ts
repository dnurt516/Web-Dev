import { Component, inject, signal, computed } from '@angular/core';
import { ProductListComponent } from 'app/product-list-component/product-list-component.js';
import { ProductService } from 'app/services/product.services.js';

@Component({
  selector: 'app-app-component',
  imports: [ProductListComponent],
  template: `
    <nav class="categories">
      @for (cat of categories; track cat.id) {
        <button 
          [class.active]="selectedCatId() === cat.id"
          (click)="selectedCatId.set(cat.id)">
          {{ cat.name }}
        </button>
      }
    </nav>

    @if (selectedCatId()) {
      <app-product-list-component 
        [products]="filteredProducts()"
        (removeProduct)="service.deleteProduct($event)"
        (likeProduct)="service.likeProduct($event)">
      </app-product-list-component>
    } @else {
      <div class="welcome">Выберите категорию для просмотра товаров</div>
    }
  `,
  styleUrl: './app-component.css'
})
export class AppComponent {
  service = inject(ProductService);
  categories = this.service.categories;
  selectedCatId = signal<number | null>(null);

  filteredProducts = computed(() => {
    const id = this.selectedCatId();
    return this.service.getProducts()().filter(p => p.categoryId === id);
  });
}
