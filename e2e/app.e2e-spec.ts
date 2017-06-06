import { AngularTrainingPage } from './app.po';

describe('angular-training App', () => {
  let page: AngularTrainingPage;

  beforeEach(() => {
    page = new AngularTrainingPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
