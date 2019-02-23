import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from 'src/app/models/product.model';
import { By } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ProductListComponent } from './product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { Router } from '@angular/router';

describe('Component: ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductListComponent,
        ProductListItemComponent,
      ],
      imports: [
        MatCardModule,
        MatListModule,
        MatIconModule,
      ],
      providers: [
        {
            provide: Router,
            useClass: class {
                navigate = jasmine.createSpy('navigate');
            }
        }
      ]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(ProductListComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
  });

  it('render product list', () => {
    const product = new Product();
    product.id = '12';

    const product2 = new Product();
    product2.id = '23';

    const product3 = new Product();
    product3.id = '4323';

    component.products = [product, product2, product3];
    component.selectedProduct = product;

    fixture.autoDetectChanges();

    const itemsEl = fixture.debugElement.queryAll(By.css('.product-list-item-container'));
    expect(itemsEl.length).toEqual(3);
  });
});
