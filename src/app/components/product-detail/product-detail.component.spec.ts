import { ProductDetailComponent } from './product-detail.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from 'src/app/models/product.model';
import { By } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

describe('Component: ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailComponent],
      imports: [
        MatCardModule,
        MatListModule,
        MatIconModule,
      ],
    });

    // create component and test fixture
    fixture = TestBed.createComponent(ProductDetailComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
  });

  it('render new product', () => {
    const product = new Product();
    product.id = '12';
    product.attachments = ['123', '234234', '234'];
    product.city = 'berlin';
    product.title = 'test';
    product.state = 'active';
    product.description = 'bla';
    product.isAwarded = true;

    component.product = product;
    fixture.autoDetectChanges();

    const titleEl = fixture.debugElement.query(By.css('.title'));
    expect(titleEl.nativeElement.textContent).toEqual(product.title);

    const cityEl = fixture.debugElement.query(By.css('.city'));
    expect(cityEl.nativeElement.textContent).toEqual(product.city);

    const descriptionEl = fixture.debugElement.query(By.css('.description'));
    expect(descriptionEl.nativeElement.textContent).toEqual(product.description);

    const attachmentsEls = fixture.debugElement.queryAll(By.css('.attachment'));
    expect(attachmentsEls.length).toEqual(3);

    const isAwardedEls = fixture.debugElement.queryAll(By.css('.awarded'));
    expect(isAwardedEls.length).toEqual(1);
  });
});
