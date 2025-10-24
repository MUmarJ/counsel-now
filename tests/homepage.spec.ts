import { test, expect } from '@playwright/test';

test.describe('Homepage Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Shaikh/);
  });

  test('should display the navigation bar', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });

  test('should display hero section with headline', async ({ page }) => {
    const hero = page.locator('#hero');
    await expect(hero).toBeVisible();

    // Check for headline text
    await expect(page.getByText(/Find Peace Through/)).toBeVisible();
    await expect(page.getByText(/Faith & Wisdom/)).toBeVisible();
  });

  test('should display hero stats', async ({ page }) => {
    // Check for stats section
    const stats = page.locator('#hero').locator('text=/Years Experience|Families Helped|Satisfaction/');
    await expect(stats.first()).toBeVisible();
  });

  test('should have Book Session button in hero', async ({ page }) => {
    const bookButton = page.getByRole('button', { name: /Schedule Consultation/i });
    await expect(bookButton).toBeVisible();
  });
});
