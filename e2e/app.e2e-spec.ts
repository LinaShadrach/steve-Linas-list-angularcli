import { TemplateAngularCliPage } from './app.po';

describe('template-angular-cli App', function() {
  let page: TemplateAngularCliPage;

  beforeEach(() => {
    page = new TemplateAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
