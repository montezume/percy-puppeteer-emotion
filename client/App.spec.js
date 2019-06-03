const percy = require('@percy/puppeteer');

describe('App - testing percy with emotion', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3001');
  });

  it('Default', async () => {
    await expect(page).toMatch('Dim sum');
    await percy.percySnapshot(page, 'Dim sum app');
  });

  describe('when selecting dim sum', () => {
    it('Opening select box', async () => {
      await page.click('#select-input');
      await page.type('#select-input', 'Co');
      await expect(page).toMatch('Coconut buns');
      await percy.percySnapshot(page, 'Dim sum app - select open');
      await page.click('#react-select-2-option-0');
      await percy.percySnapshot(page, 'Dim sum app - after select');
    });
  });
});
