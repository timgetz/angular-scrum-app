import { AngularScrumAppPage } from './app.po';

describe('angular-scrum-app App', function() {
  let page: AngularScrumAppPage;

  beforeEach(() => {
    page = new AngularScrumAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
