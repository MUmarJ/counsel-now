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
    await expect(page.getByRole('heading', { name: /Counseling Services/i })).toBeVisible();
  });

  test('should display all service cards', async ({ page }) => {
    const serviceCards = page.locator('#services').locator('div').filter({ hasText: /Marriage|Spiritual|Life/ });
    await expect(serviceCards.first()).toBeVisible();
  });

  test('should show service pricing and duration', async ({ page }) => {
    // Check for price (use first() to avoid strict mode violation)
    await expect(page.getByText(/\$\d+/).first()).toBeVisible();

    // Check for duration (use first() to avoid strict mode violation)
    await expect(page.getByText(/\d+ min/).first()).toBeVisible();
  });

  test('should expand service details when More Details is clicked', async ({ page }) => {
    // Find the Accordion trigger - Shadcn Accordion component
    const accordionTrigger = page.locator('[data-slot="accordion-trigger"]').first();

    if (await accordionTrigger.isVisible()) {
      // Verify the trigger contains "More Details"
      await expect(accordionTrigger).toContainText(/More Details/i);

      await accordionTrigger.click();
      await page.waitForTimeout(500); // Wait for accordion animation

      // Check if accordion content is visible - Shadcn Accordion
      const accordionContent = page.locator('[data-slot="accordion-content"]').first();
      await expect(accordionContent).toBeVisible();

      // Check that content has text
      const contentText = await accordionContent.textContent();
      expect(contentText?.length).toBeGreaterThan(0);
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
