import { QuestionsProjectPage } from './app.po';

describe('questions-project App', () => {
  let page: QuestionsProjectPage;

  beforeEach(() => {
    page = new QuestionsProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
