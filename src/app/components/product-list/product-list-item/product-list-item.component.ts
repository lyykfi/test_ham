import { Component, Input, HostListener, HostBinding } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';

/**
 * ProductListItemComponent component.
 */
@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.less']
})
export class ProductListItemComponent {
  /**
   * The product.
   */
  @Input()
  product: Product;

  /**
   * Is active product.
   */
  @Input()
  @HostBinding('class.is-active') isActive = false;

  /**
   * constructor
   * @param router - An object instance of Router.
   */
  constructor(private router: Router) {}

  /**
   * On click to component container.
   */
  @HostListener('click') onClick() {
    this.router.navigate(['/catalog', this.product.id]);
  }
}
