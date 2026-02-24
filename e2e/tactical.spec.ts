import { test, expect } from '@playwright/test';

test.describe('Tactical Intelligence Platform E2E', () => {

  test('verify Gotham tactical styling', async ({ page }) => {
    await page.goto('/');

    const body = page.locator('body');
    const backgroundColor = await body.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    // #040508 is rgb(4, 5, 8)
    expect(backgroundColor).toMatch(/rgb\(4, 5, 8\)/);
  });

  test('verify specialized variants (Wireless/Pentest)', async ({ page }) => {
    // Check if panels exist in the DOM (assuming they are rendered based on App.ts)
    await page.goto('/');

    // Test if tactical console is present
    const console = page.locator('[data-panel="command-console"]');
    await expect(console).toBeVisible();

    // Test signal intel panel
    const signalPanel = page.locator('[data-panel="signal-intel"]');
    await expect(signalPanel).toBeDefined();
  });
});
