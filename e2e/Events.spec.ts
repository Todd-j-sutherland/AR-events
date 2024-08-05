import { test, expect } from '@playwright/test';

test.describe('Event Card and Input Field', () => {
  test('input field functionality', async ({ page }) => {
    await page.goto('http://localhost:5173');

    const inputField = page.locator('input');

    await inputField.fill('Test Event');

    expect(await inputField.inputValue()).toBe('Test Event');

    await inputField.click();
    await expect(inputField).toHaveClass(/is-active/);

    await page.click('body');
    await expect(inputField).not.toHaveClass(/is-active/);
  });

  test('event card menu functionality', async ({ page }) => {
    await page.goto('http://localhost:5173');

    const eventCard = page.locator('.event-card').first();

    await eventCard.locator('.menu-icon-toggle').click();

    const menu = eventCard.locator('.menu');
    await expect(menu).toBeVisible();

    const menuItems = await menu.locator('li').allTextContents();
    expect(menuItems).toEqual([
      'Create campaign',
      'Import ticket sales',
      'Edit event details',
      'Merge event',
      'Delete event',
    ]);

    await page.click('body');
    await expect(menu).not.toBeVisible();
  });
});
