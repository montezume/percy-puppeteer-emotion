const percy = require('@percy/puppeteer');

describe('App - testing percy with emotion', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3001');
  });

  it('Default', async () => {
    await expect(page).toMatch('Block 1');
    await percy.percySnapshot(
      page,
      'percy-snapshot-test - testing percy with emotion',
      { widths: [1024] }
    );
  });
});
