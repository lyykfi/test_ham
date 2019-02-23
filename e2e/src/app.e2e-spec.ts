import { CatalogPage } from './catalog.po';
import { browser, logging } from 'protractor';

describe('Test CatalogPage', () => {
  let page: CatalogPage;

  beforeEach(() => {
    page = new CatalogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    console.log(page.getProductListItems());
    // expect(page.getProductListItems()).toEqual('Welcome to angular-test!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
