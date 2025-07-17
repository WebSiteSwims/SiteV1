import { test, expect } from '@playwright/test';

test.describe('App React - tests basiques', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('Boutton Découvrir DMDS"', async ({ page }) => {
    const button = await page.getByTestId('dmds-btn');
    await expect(button).toBeVisible({ timeout: 10000 });
    await expect(button).toHaveText('Découvrir DMDS');
  });

//   test('Cliquer sur le bouton affiche un message', async ({ page }) => {
//     const button = await page.getByTestId('button');
//     await button.click();

//     const message = await page.getByTestId('result');
//     await expect(message).toBeVisible();
//     await expect(message).toHaveText('Button clicked');
//   });
});
