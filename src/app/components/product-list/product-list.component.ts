import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

/**
 * ProductListComponent component.
 */
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent {
  /**
   * An array of products.
   */
  @Input()
  products: Product[];

  /**
   * Selected product.
   */
  @Input()
  selectedProduct: Product;
}
