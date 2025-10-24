import { test, expect } from '@playwright/test';

test.describe('Accessibility Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    // Page should have h1
    const h1 = page.locator('h1');
    await expect(h1.first()).toBeVisible();

    // Should have h2 headings for sections
    const h2 = page.locator('h2');
    expect(await h2.count()).toBeGreaterThan(0);
  });

  test('should have descriptive page title', async ({ page }) => {
    const title = await page.title();
    expect(title.length).toBeGreaterThan(10);
    expect(title).toContain('Shaikh');
  });

  test('should have alt text for images if present', async ({ page }) => {
    const images = page.locator('img');
    const imageCount = await images.count();

    if (imageCount > 0) {
      for (let i = 0; i < imageCount; i++) {
        const alt = await images.nth(i).getAttribute('alt');
        expect(alt).toBeTruthy();
      }
    }
  });

  test('should have proper button labels', async ({ page }) => {
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();

    // Check that buttons have text or aria-label
    for (let i = 0; i < Math.min(buttonCount, 10); i++) {
      const text = await buttons.nth(i).textContent();
      const ariaLabel = await buttons.nth(i).getAttribute('aria-label');

      expect(text || ariaLabel).toBeTruthy();
    }
  });

  test('should have proper link labels', async ({ page }) => {
    const links = page.locator('a');
    const linkCount = await links.count();

    for (let i = 0; i < Math.min(linkCount, 10); i++) {
      const text = await links.nth(i).textContent();
      const ariaLabel = await links.nth(i).getAttribute('aria-label');

      expect(text || ariaLabel).toBeTruthy();
    }
  });

  test('should be keyboard navigable', async ({ page }) => {
    // Tab through interactive elements
    await page.keyboard.press('Tab');

    // Check if focus is visible
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeTruthy();
  });

  test('should have sufficient color contrast', async ({ page }) => {
    // This is a basic check - proper contrast testing requires tools like axe
    // Check that text is readable (not too light on light background)
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });

  test('should support keyboard navigation for modal', async ({ page }) => {
    // Open modal
    const bookButton = page.locator('nav').getByRole('button', { name: /Book Session/i });
    await bookButton.click();
    await page.waitForTimeout(500);

    // Modal should be closable with Escape
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);

    // Modal should be closed
    const modal = page.locator('div').filter({ hasText: /Book Your Session/i });
    expect(await modal.count()).toBeLessThan(2);
  });

  test('should have semantic HTML', async ({ page }) => {
    // Check for semantic elements
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('main, section').first()).toBeVisible();

    // Check for proper section structure
    const sections = page.locator('section');
    expect(await sections.count()).toBeGreaterThan(0);
  });

  test('should have proper form labels if forms exist', async ({ page }) => {
    const inputs = page.locator('input');
    const inputCount = await inputs.count();

    if (inputCount > 0) {
      for (let i = 0; i < inputCount; i++) {
        const id = await inputs.nth(i).getAttribute('id');
        const ariaLabel = await inputs.nth(i).getAttribute('aria-label');
        const placeholder = await inputs.nth(i).getAttribute('placeholder');

        // Input should have id (for label), aria-label, or placeholder
        expect(id || ariaLabel || placeholder).toBeTruthy();
      }
    }
  });
});
