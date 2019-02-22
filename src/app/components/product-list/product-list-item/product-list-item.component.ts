import { Component, Input, HostListener, HostBinding } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.less']
})
export class ProductListItemComponent {
  @Input()
  product: Product;

  @Input()
  @HostBinding('class.is-active') isActive = false;

  constructor(private router: Router) {}

  @HostListener('click') onClick() {
    this.router.navigate(['/catalog', this.product.id]);
  }
}
