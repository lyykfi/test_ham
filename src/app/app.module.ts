import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CatalogPageComponent } from './components/pages/catalog-page/catalog-page.component';
import { ConfigService } from './services/config.service';
import { ProductService } from './services/product.service';
import { ProductListItemComponent } from './components/product-list/product-list-item/product-list-item.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductListItemComponent,
    CatalogPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
  ],
  providers: [
    ConfigService,
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
