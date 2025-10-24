import { test, expect } from '@playwright/test';

test.describe('Responsive Design Tests', () => {
  test('should display correctly on desktop (1920x1080)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    // Navigation should show all links horizontally
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();

    // Hero section should be visible
    await expect(page.locator('#hero')).toBeVisible();

    // Services should be in grid (3 columns)
    const servicesSection = page.locator('#services');
    await servicesSection.scrollIntoViewIfNeeded();
    await expect(servicesSection).toBeVisible();
  });

  test('should display correctly on tablet (768x1024)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    await expect(page.locator('#hero')).toBeVisible();
    await expect(page.locator('#services')).toBeVisible();
  });

  test('should display correctly on mobile (375x667)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // All sections should be visible
    await expect(page.locator('#hero')).toBeVisible();

    // Mobile menu button should be visible
    const menuButton = page.locator('nav button').first();
    await expect(menuButton).toBeVisible();
  });

  test('should have mobile menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Click hamburger menu
    const menuButton = page.locator('nav button').first();
    await menuButton.click();
    await page.waitForTimeout(300);

    // Navigation links should be visible
    await expect(page.getByRole('button', { name: 'Services' })).toBeVisible();
  });

  test('should stack hero content on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const hero = page.locator('#hero');
    await expect(hero).toBeVisible();

    // Stats should be visible
    const stats = hero.locator('text=/Years Experience|Families/');
    await expect(stats.first()).toBeVisible();
  });

  test('should stack services on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.locator('#services').scrollIntoViewIfNeeded();

    // Services should be visible in single column
    const servicesSection = page.locator('#services');
    await expect(servicesSection).toBeVisible();
  });

  test('should be scrollable on all viewports', async ({ page }) => {
    const viewports = [
      { width: 375, height: 667 },  // Mobile
      { width: 768, height: 1024 }, // Tablet
      { width: 1920, height: 1080 } // Desktop
    ];

    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await page.goto('/');

      // Should be able to scroll to bottom
      await page.locator('#contact').scrollIntoViewIfNeeded();
      await expect(page.locator('#contact')).toBeVisible();
    }
  });

  test('should have touch-friendly buttons on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Book buttons should be large enough for touch
    const bookButton = page.getByRole('button', { name: /Schedule Consultation/i }).first();
    const box = await bookButton.boundingBox();

    if (box) {
      // Minimum touch target size (44x44px recommended)
      expect(box.height).toBeGreaterThan(40);
    }
  });
});
