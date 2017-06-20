import { FuturaLibreriaPage } from './app.po';

describe('futura-libreria App', () => {
  let page: FuturaLibreriaPage;

  beforeEach(() => {
    page = new FuturaLibreriaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
