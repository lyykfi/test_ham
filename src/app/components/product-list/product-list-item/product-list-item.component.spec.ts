import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from 'src/app/models/product.model';
import { By } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ProductListItemComponent } from './product-list-item.component';

describe('Component: ProductListItemComponent', () => {
  let component: ProductListItemComponent;
  let fixture: ComponentFixture<ProductListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
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
    fixture = TestBed.createComponent(ProductListItemComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
  });

  it('render product list item', () => {
    const product = new Product();
    product.id = '12';
    product.thumbnail = '123';
    product.title = '34234';

    component.product = product;

    fixture.autoDetectChanges();

    const titleEl = fixture.debugElement.query(By.css('.title'));
    expect(titleEl.nativeElement.textContent).toEqual(product.title);
  });
});
