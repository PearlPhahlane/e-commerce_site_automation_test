const { test, expect } = require('@playwright/test');

test("SauceDemo homepage loads", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    //Check login button is visible
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});