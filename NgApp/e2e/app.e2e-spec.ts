import { StarterAppPage } from './app.po';

describe('starter-app App', () => {
  let page: StarterAppPage;

  beforeEach(() => {
    page = new StarterAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
