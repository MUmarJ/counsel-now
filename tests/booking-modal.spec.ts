import { test, expect } from '@playwright/test';

test.describe('Booking Modal Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should open booking modal when Book Session button is clicked', async ({ page }) => {
    // Click the Book Session button in navigation
    const bookButton = page.locator('nav').getByRole('button', { name: /Book Session/i });
    await bookButton.click();

    // Wait for Dialog animation
    await page.waitForTimeout(500);

    // Check if Dialog is visible using Shadcn data-slot
    const dialogContent = page.locator('[data-slot="dialog-content"]');
    await expect(dialogContent).toBeVisible();

    // Check for Dialog title
    const dialogTitle = page.locator('[data-slot="dialog-title"]');
    await expect(dialogTitle).toHaveText(/Book Your Session/i);
  });

  test('should display modal header with title', async ({ page }) => {
    const bookButton = page.locator('nav').getByRole('button', { name: /Book Session/i });
    await bookButton.click();
    await page.waitForTimeout(500);

    // Check for Dialog title and description
    const dialogTitle = page.locator('[data-slot="dialog-title"]');
    await expect(dialogTitle).toBeVisible();
    await expect(dialogTitle).toHaveText(/Book Your Session/i);

    const dialogDescription = page.locator('[data-slot="dialog-description"]');
    await expect(dialogDescription).toBeVisible();
  });

  test('should close modal when X button is clicked', async ({ page }) => {
    const bookButton = page.locator('nav').getByRole('button', { name: /Book Session/i });
    await bookButton.click();
    await page.waitForTimeout(500);

    // Find and click Dialog close button (X icon) - Shadcn Dialog has built-in close button
    const closeButton = page.locator('[data-slot="dialog-close"]');
    await expect(closeButton).toBeVisible();
    await closeButton.click();
    await page.waitForTimeout(500);

    // Dialog should be closed (not visible)
    const dialogContent = page.locator('[data-slot="dialog-content"]');
    await expect(dialogContent).not.toBeVisible();
  });

  test('should close modal when Escape key is pressed', async ({ page }) => {
    const bookButton = page.locator('nav').getByRole('button', { name: /Book Session/i });
    await bookButton.click();
    await page.waitForTimeout(500);

    // Press Escape key
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);

    // Dialog should be closed (Shadcn Dialog supports Escape key natively)
    const dialogContent = page.locator('[data-slot="dialog-content"]');
    await expect(dialogContent).not.toBeVisible();
  });

  test('should close modal when backdrop is clicked', async ({ page }) => {
    const bookButton = page.locator('nav').getByRole('button', { name: /Book Session/i });
    await bookButton.click();
    await page.waitForTimeout(500);

    // Click on Dialog overlay (backdrop) - Shadcn Dialog overlay
    const overlay = page.locator('[data-slot="dialog-overlay"]');
    await expect(overlay).toBeVisible();
    await overlay.click({ position: { x: 10, y: 10 } });
    await page.waitForTimeout(500);

    // Dialog should be closed
    const dialogContent = page.locator('[data-slot="dialog-content"]');
    await expect(dialogContent).not.toBeVisible();
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
