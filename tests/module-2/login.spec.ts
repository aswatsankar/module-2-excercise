
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/saucedemo/loginPage';

test.describe("Invalid Credentials Test",()=>{

test("Login with a Invalid Username", async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLandingPage();

    await loginPage.login("InvalidUser", "secret_sauce");
    
    await expect(loginPage.ErrorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');

})

test("Login with a Invalid Password", async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLandingPage();

    await loginPage.login("standard_user", "InvalidPassword");

    await expect(loginPage.ErrorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');

})

});



