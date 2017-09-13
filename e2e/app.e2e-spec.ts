import { NgxProductModalPage } from './app.po';

describe('ngx-product-modal App', () => {
  let page: NgxProductModalPage;

  beforeEach(() => {
    page = new NgxProductModalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
