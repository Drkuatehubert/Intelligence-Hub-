import { test, expect } from '@playwright/test';

test.describe('Unified Platform Variants', () => {
  test('should render Wireless Intelligence variant correctly', async ({ page }) => {
    // Inject variant into localStorage
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('worldmonitor-variant', 'wireless');
    });
    await page.reload();

    // Verify map title
    await expect(page.locator('.panel-title').first()).toContainText('Wireless Intelligence Map');

    // Verify specific panels
    await expect(page.locator('[data-panel="signal-intel"]')).toBeVisible();
    await expect(page.locator('[data-panel="relationship-graph"]')).toBeVisible();
  });

  test('should render Pentest Operations variant correctly', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('worldmonitor-variant', 'pentest');
    });
    await page.reload();

    await expect(page.locator('.panel-title').first()).toContainText('Security Operations Map');

    await expect(page.locator('[data-panel="pentest-monitor"]')).toBeVisible();
    await expect(page.locator('[data-panel="agent-logs"]')).toBeVisible();
  });
});
