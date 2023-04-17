import { test } from '@playwright/test';

test.describe(() => {
  test('test example', async ({ page }) => {
    await page.goto('/');
  });
});
