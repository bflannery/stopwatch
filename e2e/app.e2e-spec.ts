import { StopwatchPage } from './app.po';

describe('stopwatch App', () => {
  let page: StopwatchPage;

  beforeEach(() => {
    page = new StopwatchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
