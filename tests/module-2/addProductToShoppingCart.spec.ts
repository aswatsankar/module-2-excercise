import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../../pages/saucedemo/loginPage';
import { ProductsPage } from '../../pages/saucedemo/productsPage';

let page: Page;
let loginpage;
let productsPage;

   
    test.beforeAll("Login Application as a valid user",async ({ browser }) => {
    page = await browser.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLandingPage();
    await loginPage.login("standard_user", "secret_sauce");
});


test("Add product to the shopping cart", async ({ browser }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.navigateToLandingPage();
    await productsPage.addFleeceJacketToShoppingCart();
    await expect(productsPage.shoppingCartIcon).toContainText('1');
    await productsPage.navigateToLandingPage();
});

test.afterAll("Logout application", async ({browser}) => {
    const loginPage = new LoginPage(page);
    await loginPage.logout();
    console.log('Logout ');
});
