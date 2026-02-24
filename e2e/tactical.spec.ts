import { test, expect } from '@playwright/test';

test.describe('Tactical Intelligence Platform E2E', () => {

  test('verify World Monitor variant (Full Geopolitical)', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/World Monitor/);
    await expect(page.locator('.logo')).toContainText('MONITOR');

    // Check for tactical components
    await expect(page.locator('[data-panel="cii"]')).toBeVisible();
    await expect(page.locator('[data-panel="strategic-posture"]')).toBeVisible();
  });

  test('verify Wireless Intelligence variant', async ({ page }) => {
    // Switch to wireless variant via URL or localStorage
    await page.addInitScript(() => {
      localStorage.setItem('worldmonitor-variant', 'wireless');
    });
    await page.goto('/');

    // Check for wireless-specific panels
    await expect(page.locator('[data-panel="signal-intel"]')).toBeVisible();
    await expect(page.locator('[data-panel="relationship-graph"]')).toBeVisible();
  });

  test('verify Security Operations variant (Pentest)', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('worldmonitor-variant', 'pentest');
    });
    await page.goto('/');

    // Check for pentest-specific panels
    await expect(page.locator('[data-panel="pentest-monitor"]')).toBeVisible();
    await expect(page.locator('[data-panel="agent-logs"]')).toBeVisible();
  });

  test('interact with Tactical Console', async ({ page }) => {
    await page.goto('/');

    const input = page.locator('.terminal-input');
    await expect(input).toBeVisible();

    await input.fill('/help');
    await input.press('Enter');

    await expect(page.locator('.terminal-output')).toContainText('Available commands');
  });

  test('verify Palantir tactical styling', async ({ page }) => {
    await page.goto('/');

    const body = page.locator('body');
    const backgroundColor = await body.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    // Should be very dark (Tactical Dark)
    // rgba(5, 10, 20, 1) or similar
    expect(backgroundColor).toMatch(/rgb\(5, 10, 20\)/);
  });
});
