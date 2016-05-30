export class HtkPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('htk-app h1')).getText();
  }
}
