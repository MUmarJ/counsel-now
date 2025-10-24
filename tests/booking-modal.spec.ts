import { test, expect } from '@playwright/test';

test.describe('Booking Modal Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should open booking modal when Book Session button is clicked', async ({ page }) => {
    // Click the Book Session button in navigation
    const bookButton = page.locator('nav').getByRole('button', { name: /Book Session/i });
    await bookButton.click();

    // Wait for modal to appear
    await page.waitForTimeout(500);

    // Check if modal is visible
    const modal = page.locator('div').filter({ hasText: /Book Your Session/i });
    await expect(modal.first()).toBeVisible();
  });

  test('should display modal header with title', async ({ page }) => {
    const bookButton = page.locator('nav').getByRole('button', { name: /Book Session/i });
    await bookButton.click();
    await page.waitForTimeout(500);

    await expect(page.getByText(/Book Your Session/i)).toBeVisible();
  });

  test('should close modal when X button is clicked', async ({ page }) => {
    const bookButton = page.locator('nav').getByRole('button', { name: /Book Session/i });
    await bookButton.click();
    await page.waitForTimeout(500);

    // Find and click close button (X icon)
    const closeButton = page.locator('button').filter({ has: page.locator('svg') }).last();
    await closeButton.click();
    await page.waitForTimeout(500);

    // Modal should be closed (not visible)
    const modal = page.locator('div').filter({ hasText: /Book Your Session/i });
    expect(await modal.count()).toBeLessThan(2);
  });

  test('should close modal when Escape key is pressed', async ({ page }) => {
    const bookButton = page.locator('nav').getByRole('button', { name: /Book Session/i });
    await bookButton.click();
    await page.waitForTimeout(500);

    // Press Escape key
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);

    // Modal should be closed
    const modal = page.locator('div').filter({ hasText: /Book Your Session/i });
    expect(await modal.count()).toBeLessThan(2);
  });

  test('should close modal when backdrop is clicked', async ({ page }) => {
    const bookButton = page.locator('nav').getByRole('button', { name: /Book Session/i });
    await bookButton.click();
    await page.waitForTimeout(500);

    // Click on backdrop (outside modal)
    await page.locator('div').first().click({ position: { x: 10, y: 10 } });
    await page.waitForTimeout(500);

    // Modal should be closed
    const modal = page.locator('div').filter({ hasText: /Book Your Session/i });
    expect(await modal.count()).toBeLessThan(2);
  });

  test('should display phone number in modal footer', async ({ page }) => {
    const bookButton = page.locator('nav').getByRole('button', { name: /Book Session/i });
    await bookButton.click();
    await page.waitForTimeout(500);

    // Check for phone number in footer
    await expect(page.getByText(/Questions\? Call us/i)).toBeVisible();
  });

  test('should have Cal.com embed placeholder', async ({ page }) => {
    const bookButton = page.locator('nav').getByRole('button', { name: /Book Session/i });
    await bookButton.click();
    await page.waitForTimeout(500);

    // Check for Cal.com data attribute
    const calEmbed = page.locator('[data-cal-link]');
    expect(await calEmbed.count()).toBeGreaterThan(0);
  });
});
