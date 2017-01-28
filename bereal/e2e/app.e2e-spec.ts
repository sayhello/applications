import { BerealPage } from './app.po';

describe('bereal App', function() {
  let page: BerealPage;

  beforeEach(() => {
    page = new BerealPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
