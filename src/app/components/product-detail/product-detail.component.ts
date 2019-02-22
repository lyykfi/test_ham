import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

/**
 * ProductDetailComponent component.
 */
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent {
  /**
   * Selected product.
   */
  @Input()
  product: Product;
}
