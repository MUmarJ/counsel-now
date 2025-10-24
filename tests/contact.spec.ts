import { test, expect } from '@playwright/test';

test.describe('Contact Section Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#contact').scrollIntoViewIfNeeded();
  });

  test('should display contact section', async ({ page }) => {
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();
  });

  test('should display section title', async ({ page }) => {
    await expect(page.getByText(/Get in Touch/i)).toBeVisible();
  });

  test('should display contact methods', async ({ page }) => {
    const contactSection = page.locator('#contact');

    // Check for Phone
    await expect(contactSection.getByText(/Phone/i)).toBeVisible();

    // Check for Email
    await expect(contactSection.getByText(/Email/i)).toBeVisible();
  });

  test('should have clickable phone link', async ({ page }) => {
    const phoneLink = page.locator('a[href^="tel:"]').first();
    await expect(phoneLink).toBeVisible();
  });

  test('should have clickable email link', async ({ page }) => {
    const emailLink = page.locator('a[href^="mailto:"]').first();
    await expect(emailLink).toBeVisible();
  });

  test('should display office hours', async ({ page }) => {
    await expect(page.getByText(/Office Hours/i)).toBeVisible();
    await expect(page.getByText(/Monday/i)).toBeVisible();
  });

  test('should display office hours schedule', async ({ page }) => {
    const contactSection = page.locator('#contact');
    // Check for time format
    const textContent = await contactSection.textContent();
    expect(textContent).toMatch(/\d{1,2}:\d{2}\s*[AP]M/i);
  });

  test('should have final CTA button', async ({ page }) => {
    await expect(page.getByRole('button', { name: /Book Your Session/i })).toBeVisible();
  });

  test('should display footer with copyright', async ({ page }) => {
    const currentYear = new Date().getFullYear();
    await expect(page.getByText(new RegExp(`© ${currentYear}`))).toBeVisible();
  });

  test('should display privacy policy link', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Privacy Policy/i })).toBeVisible();
  });

  test('should display terms of service link', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Terms of Service/i })).toBeVisible();
  });

  test('should display cancellation policy link', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Cancellation Policy/i })).toBeVisible();
  });
});
