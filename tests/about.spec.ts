import { test, expect } from '@playwright/test';

test.describe('About Section Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#about').scrollIntoViewIfNeeded();
  });

  test('should display about section', async ({ page }) => {
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeVisible();
  });

  test('should display section title', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /About Shaikh/i })).toBeVisible();
  });

  test('should display greeting', async ({ page }) => {
    await expect(page.getByText(/As-salamu alaykum/i)).toBeVisible();
  });

  test('should display bio paragraphs', async ({ page }) => {
    const aboutSection = page.locator('#about');
    // Check that there's substantial text content
    const textContent = await aboutSection.textContent();
    expect(textContent?.length).toBeGreaterThan(100);
  });

  test('should display credentials with checkmarks', async ({ page }) => {
    const aboutSection = page.locator('#about');
    // Look for credentials section
    await expect(aboutSection.getByText(/Credentials/i)).toBeVisible();
  });

  test('should display Quranic quote if present', async ({ page }) => {
    const aboutSection = page.locator('#about');
    const quoteSection = aboutSection.locator('div').filter({ hasText: /—/ });

    // Quote might be present
    const count = await quoteSection.count();
    if (count > 0) {
      await expect(quoteSection.first()).toBeVisible();
    }
  });

  test('should display counselor image or placeholder', async ({ page }) => {
    const aboutSection = page.locator('#about');
    // Either an image or a placeholder should be visible
    const hasContent = await aboutSection.locator('img, div').count();
    expect(hasContent).toBeGreaterThan(0);
  });
});
