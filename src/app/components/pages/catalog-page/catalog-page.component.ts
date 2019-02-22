import { Component, OnInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { MediaMatcher } from '@angular/cdk/layout';

enum SideBarStates {
  over = 'over',
  side = 'side',
}

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.less']
})
export class CatalogPageComponent implements OnInit {
  products: Product[] = null;
  selectedProduct: Product = null;
  opened = false;
  mode = SideBarStates.over;

  mobileQuery: MediaQueryList;
  mobileQueryListener: () => void;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher) {
      this.mobileQuery = media.matchMedia('(max-width: 1000px)');
      this.mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this.mobileQueryListener);
  }

  async ngOnInit(): Promise<void> {
    if (!this.mobileQuery.matches) {
        this.opened = true;
        this.mode = SideBarStates.side;
    }

    this.products = await this.productService.getAll();

    this.activatedRoute.params.subscribe(async (params) => {
      this.selectedProduct = await this.productService.getProductById(params.id || this.products[0].id);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mode = !this.mobileQuery.matches ? SideBarStates.side : SideBarStates.over;
  }

  onCloseSnav(snav) {
    if (snav.mode === SideBarStates.over) {
      snav.close();
    }
  }
}
