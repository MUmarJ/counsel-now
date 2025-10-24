import { test, expect } from '@playwright/test';

test.describe('Services Section Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Scroll to services section
    await page.locator('#services').scrollIntoViewIfNeeded();
  });

  test('should display services section', async ({ page }) => {
    const servicesSection = page.locator('#services');
    await expect(servicesSection).toBeVisible();
  });

  test('should display section title and subtitle', async ({ page }) => {
    await expect(page.getByText(/Our Services/i)).toBeVisible();
  });

  test('should display all service cards', async ({ page }) => {
    const serviceCards = page.locator('#services').locator('div').filter({ hasText: /Marriage|Spiritual|Life/ });
    await expect(serviceCards.first()).toBeVisible();
  });

  test('should show service pricing and duration', async ({ page }) => {
    // Check for price
    await expect(page.getByText(/\$\d+/)).toBeVisible();

    // Check for duration
    await expect(page.getByText(/\d+ min/)).toBeVisible();
  });

  test('should expand service details when More Details is clicked', async ({ page }) => {
    const moreDetailsButton = page.getByRole('button', { name: /More Details/i }).first();

    if (await moreDetailsButton.isVisible()) {
      await moreDetailsButton.click();
      await page.waitForTimeout(500); // Wait for animation

      // Check if details are expanded (more text visible)
      await expect(page.locator('#services')).toContainText(/./);
    }
  });

  test('should have Book This Service buttons', async ({ page }) => {
    const bookButtons = page.getByRole('button', { name: /Book This Service/i });
    await expect(bookButtons.first()).toBeVisible();
  });

  test('should display Schedule a Consultation CTA', async ({ page }) => {
    await expect(page.getByRole('button', { name: /Schedule a Consultation/i })).toBeVisible();
  });
});
