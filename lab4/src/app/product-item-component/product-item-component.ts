import { Component, input, output, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item-component',
  imports: [],
  template: `
    <div class="productCard" [id]="product().id">
      <a target="_blank" [href]="'https://t.me/share/url?url=' + encode(product().link) + '&text=' + product().name" class="share"><svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"> <g fill="none" fill-rule="evenodd" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 2)"> <path d="m8.5 2.5-1.978-2-2.022 2"/> <path d="m6.5.5v9"/> <path d="m3.5 4.5h-1c-1.1045695 0-2 .8954305-2 2v7c0 1.1045695.8954305 2 2 2h8c1.1045695 0 2-.8954305 2-2v-7c0-1.1045695-.8954305-2-2-2h-1"/> </g> </svg></a>

      <div class="productLike" (click)="onLike()"><svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="icomoon-ignore"> </g> <path d="M21.886 5.115c3.521 0 6.376 2.855 6.376 6.376 0 1.809-0.754 3.439-1.964 4.6l-10.297 10.349-10.484-10.536c-1.1-1.146-1.778-2.699-1.778-4.413 0-3.522 2.855-6.376 6.376-6.376 2.652 0 4.925 1.62 5.886 3.924 0.961-2.304 3.234-3.924 5.886-3.924zM21.886 4.049c-2.345 0-4.499 1.089-5.886 2.884-1.386-1.795-3.54-2.884-5.886-2.884-4.104 0-7.442 3.339-7.442 7.442 0 1.928 0.737 3.758 2.075 5.152l11.253 11.309 11.053-11.108c1.46-1.402 2.275-3.308 2.275-5.352 0-4.104-3.339-7.442-7.442-7.442v0z" fill="#000000"> </path> </svg> {{ product().likes }}</div>
      <div class="productDel" (click)="remove.emit(product().id)"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg></div>

      <div class="productImg">
        <button class="prev" (click)="prevImage($event)">❮</button>
        
        <img [src]="product().images[currentImageIndex()]" [alt]="product().name">
        
        <button class="next" (click)="nextImage($event)">❯</button>
        
        <div class="dots">
          @for (img of product().images; track $index) {
            <span class="dot" [class.active]="$index === currentImageIndex()"></span>
          }
        </div>  
      </div> 
      <div class="productInfo">
        <a class="productDesc" [href]="product().link">{{product().description}}</a>
        
        <div class="productRate">
          <span [style.--rate]="product().rating"></span>
          <a [href]="product().link+'?tab=reviews'">({{ product().ratingCount }} отзыва)</a>
        </div>

        <div class="productPrice">
          <div class="regular">
            <span class="payementType">Цена</span>
            <span class="price">{{ product().price }} ₸</span>
          </div>
          <div class="instPlan">
            <span class="payementType">В рассрочку</span>
            <div>
              <span class="price">{{ instPlanPrice() }} ₸</span>
              <span class="info">x24</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './product-item-component.css',
})
export class ProductItemComponent {
  product = input.required<Product>();
  remove = output<number>();
  like = output<number>();
  protected readonly encode = encodeURIComponent;
  protected readonly Number = Number;
  
  instPlanPrice = computed(() => {
    return Math.round(Number(this.product().price.replace(' ', '')) / 24).toLocaleString('ru-RU');
  });

  currentImageIndex = signal(0);

  nextImage(event : Event) {
    event.preventDefault();
    const images = this.product().images;
    this.currentImageIndex.update(idx => (idx + 1) % images.length);
  }

  prevImage(event : Event) {
    event.preventDefault();
    const images = this.product().images;
    this.currentImageIndex.update(idx => (idx - 1 + images.length) % images.length);
  }

  onLike() {
    this.like.emit(this.product().id);
  }
}
