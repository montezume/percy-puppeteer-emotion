const percy = require('@percy/puppeteer');

describe('App - testing percy with emotion', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3001');
  });

  it('Default', async () => {
    await expect(page).toMatch('Dim sum');
    await percy.percySnapshot(page, 'Dim sum, main page');
  });
});
