import { test, expect } from '@playwright/test';

test.describe('Testimonials Section Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#testimonials').scrollIntoViewIfNeeded();
  });

  test('should display testimonials section', async ({ page }) => {
    const testimonialsSection = page.locator('#testimonials');
    await expect(testimonialsSection).toBeVisible();
  });

  test('should display section title', async ({ page }) => {
    await expect(page.getByText(/What Clients Say/i)).toBeVisible();
  });

  test('should display testimonial cards', async ({ page }) => {
    const testimonialCards = page.locator('#testimonials').locator('div').filter({ hasText: /Amina|Hassan|Fatima/ });
    await expect(testimonialCards.first()).toBeVisible();
  });

  test('should display star ratings', async ({ page }) => {
    const testimonialsSection = page.locator('#testimonials');
    // Check for star icons (SVG elements)
    const stars = testimonialsSection.locator('svg');
    expect(await stars.count()).toBeGreaterThan(0);
  });

  test('should display testimonial text with quotes', async ({ page }) => {
    const testimonialsSection = page.locator('#testimonials');
    const textContent = await testimonialsSection.textContent();

    // Check that there are testimonial quotes
    expect(textContent).toContain('"');
  });

  test('should display client names', async ({ page }) => {
    const testimonialsSection = page.locator('#testimonials');
    // Check for names (pattern: FirstName L.)
    const textContent = await testimonialsSection.textContent();
    expect(textContent).toMatch(/[A-Z][a-z]+ [A-Z]\./);
  });

  test('should display overall rating', async ({ page }) => {
    await expect(page.getByText(/5.0 Average Rating/i)).toBeVisible();
  });

  test('should display review count', async ({ page }) => {
    await expect(page.getByText(/\d+\+ client reviews/i)).toBeVisible();
  });
});
