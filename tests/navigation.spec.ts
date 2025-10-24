import { test, expect } from '@playwright/test';

test.describe('Navigation Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display all navigation links', async ({ page }) => {
    const navLinks = ['Home', 'Services', 'About', 'Testimonials', 'Contact'];

    for (const link of navLinks) {
      await expect(page.getByRole('button', { name: link })).toBeVisible();
    }
  });

  test('should display phone number in navigation', async ({ page }) => {
    await expect(page.getByText(/\(\d{3}\) \d{3}-\d{4}/).first()).toBeVisible();
  });

  test('should display Book Session button in nav', async ({ page }) => {
    const bookButton = page.locator('nav').getByRole('button', { name: /Book Session/i });
    await expect(bookButton).toBeVisible();
  });

  test('should scroll to sections when navigation links are clicked', async ({ page }) => {
    // Click Services link
    await page.getByRole('button', { name: 'Services' }).first().click();
    await page.waitForTimeout(1000); // Wait for smooth scroll

    // Check if services section is in viewport
    const servicesSection = page.locator('#services');
    await expect(servicesSection).toBeInViewport();
  });

  test('should open mobile menu on small screens', async ({ page, viewport }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Mobile menu button should be visible
    const menuButton = page.locator('button').filter({ has: page.locator('svg') }).first();
    await expect(menuButton).toBeVisible();

    // Click to open menu
    await menuButton.click();

    // Mobile menu items should be visible
    await expect(page.getByRole('button', { name: 'Services' })).toBeVisible();
  });

  test('should have sticky navigation on scroll', async ({ page }) => {
    const nav = page.locator('nav');

    // Initially visible
    await expect(nav).toBeVisible();

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(500);

    // Should still be visible (sticky)
    await expect(nav).toBeVisible();
  });
});
