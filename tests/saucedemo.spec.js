const { test, expect } = require('@playwright/test');

test("SauceDemo homepage loads", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    //Check login button is visible
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();

});

test("User can login", async({page}) => {

    await page.goto("https://www.saucedemo.com/");
    
    //Check login button is visible
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();

    //Enter username and password
    await page.fill('[data-test="username"]', "standard_user");
    await page.fill('[data-test="password"]', "secret_sauce");

    //Click login button
    await page.click('[data-test="login-button"]');

    //Confirm login success 
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

