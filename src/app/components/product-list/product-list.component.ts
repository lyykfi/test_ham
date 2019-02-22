import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  error: string;

  constructor(private catalogService: ProductService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.products = await this.catalogService.getAll();
      console.log(this.products);
    } catch (e) {
      this.error = e;
    }
  }
}
