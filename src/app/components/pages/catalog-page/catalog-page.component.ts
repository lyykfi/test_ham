import { Component, OnInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { MediaMatcher } from '@angular/cdk/layout';

enum SideBarStates {
  over = 'over',
  side = 'side',
}

/**
 * CatalogPageComponent component.
 */
@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.less']
})
export class CatalogPageComponent implements OnInit {
  /**
   * An array with products.
   */
  products: Product[] = null;

  /**
   * Selected product.
   */
  selectedProduct: Product = null;

  /**
   * Is opened sidebar.
   */
  opened = false;

  /**
   * Side bar mode.
   */
  mode = SideBarStates.over;

  /**
   * Mobile query.
   */
  mobileQuery: MediaQueryList;

  /**
   * Mobile query listener.
   */
  mobileQueryListener: () => void;

  /**
   * Constructor.
   * @param activatedRoute - An object of instance ActivatedRoute.
   * @param productService - An object of instance ProductService.
   * @param changeDetectorRef - An object of instance ChangeDetectorRef.
   * @param media - An object of instance MediaMatcher.
   */
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher) {
      this.mobileQuery = media.matchMedia('(max-width: 1000px)');
      this.mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this.mobileQueryListener);
  }

  /**
   * OnInit component.
   */
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

  /**
   * On window resize.
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.mode = !this.mobileQuery.matches ? SideBarStates.side : SideBarStates.over;
  }

  /**
   * On close the Snav.
   * @param snav - An object of instance SideBar.
   */
  onCloseSnav(snav) {
    if (snav.mode === SideBarStates.over) {
      snav.close();
    }
  }
}
