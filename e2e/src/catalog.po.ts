import { browser, by, element } from 'protractor';

export class CatalogPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getProductListItems() {
    console.log(element(by.css('.product-list-item')));
    // return element(by.css('.product-list-item')). as Promise<string>;
  }
}
