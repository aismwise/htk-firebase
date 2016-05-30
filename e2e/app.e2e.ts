import { HtkPage } from './app.po';

describe('htk App', function() {
  let page: HtkPage;

  beforeEach(() => {
    page = new HtkPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('htk works!');
  });
});
