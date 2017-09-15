import { MyHeroPage } from './app.po';

describe('my-hero App', function() {
  let page: MyHeroPage;

  beforeEach(() => {
    page = new MyHeroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
