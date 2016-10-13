import { DoogoodAppPage } from './app.po';

describe('doogood-app App', function() {
  let page: DoogoodAppPage;

  beforeEach(() => {
    page = new DoogoodAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
